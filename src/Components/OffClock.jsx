import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowLeft, FiMapPin, FiPlus } from "react-icons/fi";
import { offClock, profile } from "../content/site.js";

const icons = { linkedin: FaLinkedinIn, github: FaGithub, instagram: FaInstagram };

// Each stamp gets its own ink colour and tilt.
const tilts = [-7, 5, -3, 8, -5, 3];

function Cup() {
  return (
    <svg viewBox="0 0 120 120" className="oc-cup" aria-hidden="true">
      <path className="oc-steam" d="M50 42 q-7 -9 0 -18 q7 -9 0 -18" />
      <path className="oc-steam" d="M66 42 q-7 -9 0 -18 q7 -9 0 -18" />
      <path d="M26 50 H90 V70 a26 26 0 0 1 -26 26 H52 a26 26 0 0 1 -26 -26 Z" />
      <path d="M90 58 H96 a10 10 0 0 1 0 20 H88" />
      <path d="M16 108 H104" />
    </svg>
  );
}

function Ball() {
  return (
    <div className="oc-bounce" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="oc-ball">
        <circle cx="50" cy="50" r="46" />
        <path d="M10 30 C34 38 34 62 10 70" />
        <path d="M90 30 C66 38 66 62 90 70" />
      </svg>
      <span className="oc-ball-shadow" />
    </div>
  );
}

export default function OffClock({ onBack }) {
  const { coffee, teaching, tennis, places, snapshot } = offClock;
  const abroad = places.filter((place) => !place.home);
  const cities = abroad.reduce((sum, place) => sum + place.cities.length, 0);

  return (
    <div className="oc">
      <header className="oc-top">
        <span className="oc-mono">AA</span>
      </header>

      <section className="oc-hero">
        <div className="oc-hero-copy">
          <p className="oc-hand">hi, still Abdallah</p>
          <h1>
            Off the <em>clock.</em>
          </h1>
          <p className="oc-intro">{offClock.intro}</p>
        </div>
        <figure className="oc-polaroid">
          <img src={offClock.photo.src} alt={offClock.photo.alt} />
          <figcaption>{offClock.photo.caption}</figcaption>
          <span className="oc-sticker" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="oc-ring" d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0" />
              </defs>
              <text>
                <textPath href="#oc-ring">OFF DUTY · OFF DUTY · OFF DUTY ·</textPath>
              </text>
            </svg>
          </span>
        </figure>
      </section>

      <section className="oc-grid">
        <article className="oc-tile oc-coffee">
          <p className="oc-kicker">{coffee.kicker}</p>
          <h2>{coffee.title}</h2>
          <p>{coffee.line}</p>
          <p className="oc-where">
            <FiMapPin /> {coffee.where}
          </p>
          <Cup />
        </article>

        <article className="oc-tile oc-teach">
          <div>
            <p className="oc-kicker">{teaching.kicker}</p>
            <h2>{teaching.title}</h2>
            <p>{teaching.line}</p>
          </div>
          <span className="oc-logo">
            <img src={teaching.logo} alt="CSTeam logo" />
          </span>
          <code className="oc-code">if student.gets_it(): smile()</code>
        </article>

        <article className="oc-tile oc-tennis">
          <span className="oc-court" aria-hidden="true" />
          <div>
            <p className="oc-kicker">{tennis.kicker}</p>
            <h2>{tennis.title}</h2>
            <p>{tennis.line}</p>
          </div>
          <Ball />
        </article>

        <article className="oc-tile oc-places">
          <div className="oc-places-head">
            <p className="oc-kicker">Passport</p>
            <h2>
              {abroad.length} countries, <em>{cities} cities</em>
            </h2>
            <p className="oc-hand">and counting</p>
            <figure className="oc-snap">
              <img src={snapshot.src} alt={snapshot.alt} loading="lazy" />
              <figcaption>{snapshot.caption}</figcaption>
            </figure>
          </div>
          <ul className="oc-stamps">
            {places.map((place, i) => (
              <li
                key={place.country}
                className={`oc-ink-${i % 4} ${place.cities.length > 3 ? "is-wide" : ""}`}
                style={{ "--r": `${tilts[i % tilts.length]}deg` }}
              >
                <span className="oc-stamp-country">{place.country}</span>
                <span className="oc-stamp-city">{place.cities.join(" · ")}</span>
                {place.home && <span className="oc-stamp-when">Home</span>}
              </li>
            ))}
            <li className="oc-next" style={{ "--r": "-2deg" }}>
              <FiPlus />
              <span>next stop?</span>
            </li>
          </ul>
        </article>
      </section>

      <footer className="oc-end">
        <p className="oc-hand">that&apos;s the rest of me</p>
        <h2>Say hi.</h2>
        <nav className="oc-socials" aria-label="Social links">
          {profile.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <Icon /> {link.label}
              </a>
            );
          })}
        </nav>
        <button type="button" className="oc-back" onClick={onBack}>
          <FiArrowLeft /> Back to work
        </button>
      </footer>
    </div>
  );
}
