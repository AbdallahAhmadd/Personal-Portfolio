import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight, FiBriefcase, FiCoffee } from "react-icons/fi";
import { chapters, highlights, profile } from "./content/site.js";
import OffClock from "./Components/OffClock.jsx";
import Road from "./Components/Road.jsx";
import StoryDialog from "./Components/StoryDialog.jsx";

const icons = { linkedin: FaLinkedinIn, github: FaGithub, instagram: FaInstagram };

// The fun side of the site lives at this hash, so it can be linked to.
const PLAY_HASH = "#off-the-clock";

function Socials({ big = false }) {
  return (
    <nav className={`socials ${big ? "is-big" : ""}`} aria-label="Social links">
      {profile.links.map((link) => {
        const Icon = icons[link.icon];
        return (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={big ? undefined : link.label}>
            <Icon />
            {big && (
              <>
                <span>{link.label}</span>
                <FiArrowUpRight className="out" />
              </>
            )}
          </a>
        );
      })}
    </nav>
  );
}

function Hero({ onDrive }) {
  return (
    <header className="hero">
      <div className="topbar">
        <span className="monogram">AA</span>
        <Socials />
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live" /> {profile.road}
          </p>
          <h1>
            {profile.name.split(" ")[0]}
            <br />
            <span className="grad">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <button type="button" className="btn-drive" onClick={() => onDrive(chapters[0].id)}>
              Start the drive <FiArrowDown />
            </button>
            <button type="button" className="btn-ghost" onClick={() => onDrive(chapters[chapters.length - 1].id)}>
              Skip to the finish
            </button>
          </div>
          <ul className="stats">
            {highlights.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-art">
          <div className="portrait">
            <svg className="portrait-ring" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="100" cy="100" r="96" />
            </svg>
            <img src={profile.portrait} alt={profile.portraitAlt} />
            <p className="hero-tag">
              <FiBriefcase /> {profile.badge}
            </p>
          </div>
        </div>
      </div>

      <nav className="trip" aria-label="Every stop on the road">
        <span className="trip-end">2021</span>
        <ol>
          {chapters.map((item) => (
            <li key={item.id} className={item.kind === "side" ? "is-side" : ""}>
              <button type="button" style={{ "--c": item.color }} onClick={() => onDrive(item.id)}>
                <span className="trip-dot" />
                <span className="trip-tip">
                  <b>{item.short || item.title}</b>
                  {item.when}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <span className="trip-end">2026</span>
      </nav>
    </header>
  );
}

function App() {
  const road = useRef(null);
  const openedAt = useRef(null);
  const [openId, setOpenId] = useState(null);
  const [glow, setGlow] = useState(chapters[0].color);

  const [play, setPlay] = useState(() => window.location.hash === PLAY_HASH);

  const onActive = useCallback((item) => setGlow(item.color), []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-play", play);
  }, [play]);

  useEffect(() => {
    const onPop = () => setPlay(window.location.hash === PLAY_HASH);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Swap between work and play, revealing the new page in a circle that
  // grows out of the button that was pressed.
  function flip(event) {
    const next = !play;
    const apply = () => {
      flushSync(() => setPlay(next));
      window.scrollTo({ top: 0, behavior: "instant" });
      window.history.pushState(null, "", next ? PLAY_HASH : window.location.pathname + window.location.search);
    };
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    document
      .startViewTransition(apply)
      .ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 750, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {});
  }

  const toggle = (
    <button type="button" className={`switch ${play ? "is-play" : ""}`} onClick={flip}>
      {play ? <FiBriefcase /> : <FiCoffee />}
      {play ? "Back to work" : "Off the clock"}
    </button>
  );

  if (play) {
    return (
      <>
        {toggle}
        <OffClock onBack={flip} />
      </>
    );
  }

  function open(id) {
    openedAt.current = id;
    setOpenId(id);
  }

  function close() {
    if (openId && openId !== openedAt.current) road.current?.jumpTo(openId, "auto");
    setOpenId(null);
  }

  return (
    <>
      {toggle}
      <div className="sky" style={{ "--glow": glow }} aria-hidden="true" />
      <Hero onDrive={(id) => road.current?.jumpTo(id)} />
      <main>
        <div className="road-intro">
          <p className="eyebrow">The road</p>
          <h2>Five years, one road.</h2>
          <p>Scroll to drive. Every stop opens into its story.</p>
        </div>
        <Road ref={road} onOpen={open} onActive={onActive} />
      </main>
      <footer className="end">
        <p className="eyebrow">End of the road, for now</p>
        <h2>Where to next?</h2>
        <p>I graduated from the GUC on 3 October 2026. If you are building something worth driving toward, I would like to hear about it.</p>
        <Socials big />
        <p className="fine">© 2026 {profile.name}</p>
      </footer>
      <StoryDialog id={openId} onClose={close} onNavigate={setOpenId} />
    </>
  );
}

export default App;
