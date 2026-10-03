import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import { FiArrowRight, FiCamera } from "react-icons/fi";
import { chapters, route } from "../content/site.js";
import Mark, { Badge } from "./Mark.jsx";

// Where the car sits on screen, as a fraction of the viewport height.
const EYE = 0.55;

function colorAt(index) {
  for (let i = index; i < route.length; i += 1) if (route[i].color) return route[i].color;
  return chapters[chapters.length - 1].color;
}

function Car() {
  return (
    <g className="car-body">
      <path className="beam" d="M16 -5 L78 -26 L78 26 L16 5 Z" />
      <rect x="-17" y="-10" width="34" height="20" rx="7" className="shell" />
      <rect x="-3" y="-8" width="9" height="16" rx="3" className="glass" />
      <rect x="-14" y="-8" width="6" height="16" rx="2" className="glass rear" />
      <rect x="-17" y="-2.5" width="34" height="5" className="stripe" />
      <circle cx="15" cy="-6.5" r="2" className="lamp" />
      <circle cx="15" cy="6.5" r="2" className="lamp" />
    </g>
  );
}

function Media({ item }) {
  if (item.images?.length) {
    const shots = item.images.slice(0, 3);
    return (
      <div className="card-media has-shots">
        {shots.map((image, i) => (
          <img key={image.src} src={image.src} alt="" className={`shot shot-${i}`} loading="lazy" />
        ))}
        <span className="shot-count">
          <FiCamera /> {item.images.length}
        </span>
      </div>
    );
  }
  return (
    <div className="card-media is-empty">
      <Mark id={item.id} className="media-mark" />
      <span className="stamp">{item.when}</span>
    </div>
  );
}

function StopCard({ item, onOpen }) {
  return (
    <article
      className={`card ${item.gradient ? "is-branded" : ""}`}
      style={item.gradient ? { "--brand": item.gradient } : undefined}
      onClick={() => onOpen(item.id)}
    >
      <Media item={item} />
      <div className="card-body">
        <p className="card-meta">
          <span className="chip">{item.tag}</span>
          <span className="when">{item.when}</span>
        </p>
        <h3>{item.wordmark ? <img className="wordmark" src={item.wordmark} alt={item.title} style={item.wordmarkHeight ? { height: item.wordmarkHeight } : undefined} /> : item.title}</h3>
        <p className="card-line">{item.line}</p>
        <button
          type="button"
          className="card-cta"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(item.id);
          }}
        >
          Read the story <FiArrowRight />
        </button>
      </div>
    </article>
  );
}

function SideCard({ item, onOpen }) {
  return (
    <article
      className={`card card-side ${item.gradient ? "is-branded" : ""}`}
      style={item.gradient ? { "--brand": item.gradient } : undefined}
      onClick={() => onOpen(item.id)}
    >
      <div className="sign-head">
        <Badge item={item} size="lg" />
        <div>
          <p className="sign-exit">Side road</p>
          <h3>{item.title}</h3>
        </div>
      </div>
      <p className="card-line">{item.line}</p>
      <p className="card-meta">
        <span className="chip">{item.tag.replace("Side road · ", "")}</span>
        <span className="when">{item.when}</span>
      </p>
      <button
        type="button"
        className="card-cta"
        onClick={(event) => {
          event.stopPropagation();
          onOpen(item.id);
        }}
      >
        Take the exit <FiArrowRight />
      </button>
    </article>
  );
}

function Confetti() {
  return (
    <span className="confetti" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <i key={i} style={{ "--i": i, "--c": chapters[i % chapters.length].color }} />
      ))}
    </span>
  );
}

const Road = forwardRef(function Road({ onOpen, onActive }, ref) {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const pavedRef = useRef(null);
  const glowRef = useRef(null);
  const carRef = useRef(null);
  const fillRef = useRef(null);
  const measure = useRef(null);
  const [geo, setGeo] = useState(null);
  const [reached, setReached] = useState(-1);
  const [hudOn, setHudOn] = useState(false);
  const [marks, setMarks] = useState({});
  const reachedRef = useRef(-1);
  const hudRef = useRef(false);

  // Lay the road through every pin on the page.
  const build = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const box = wrap.getBoundingClientRect();
    const centre = (el) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
    };
    const pins = [...wrap.querySelectorAll("[data-road]")].map((el) => ({
      index: Number(el.dataset.road),
      ...centre(el),
    }));
    if (pins.length < 2) return;

    let d = `M ${pins[0].x} ${pins[0].y}`;
    for (let i = 1; i < pins.length; i += 1) {
      const a = pins[i - 1];
      const b = pins[i];
      const mid = (a.y + b.y) / 2;
      d += ` C ${a.x} ${mid} ${b.x} ${mid} ${b.x} ${b.y}`;
    }

    const spurs = [...wrap.querySelectorAll("[data-spur]")].map((el) => {
      const index = Number(el.dataset.spur);
      const from = pins.find((pin) => pin.index === index);
      const to = centre(el);
      const bend = (from.x + to.x) / 2;
      return { index, d: `M ${from.x} ${from.y} C ${bend} ${from.y} ${bend} ${to.y} ${to.x} ${to.y}` };
    });

    const grad = pins
      .filter((pin) => route[pin.index].kind !== "year")
      .map((pin) => ({ offset: Math.min(1, Math.max(0, pin.y / box.height)), color: route[pin.index].color }));

    setGeo((old) =>
      old && old.d === d && old.w === box.width && old.h === box.height
        ? old
        : { w: box.width, h: box.height, d, spurs, grad, pins }
    );
  }, []);

  useLayoutEffect(() => {
    build();
    const observer = new ResizeObserver(build);
    observer.observe(wrapRef.current);
    window.addEventListener("resize", build);
    document.fonts?.ready.then(build);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", build);
    };
  }, [build]);

  const update = useCallback(() => {
    const m = measure.current;
    const wrap = wrapRef.current;
    if (!m || !wrap) return;
    const box = wrap.getBoundingClientRect();
    const target = window.innerHeight * EYE - box.top;
    const { ys, step, length } = m;

    let travelled;
    if (target <= ys[0]) travelled = 0;
    else if (target >= ys[ys.length - 1]) travelled = length;
    else {
      let lo = 0;
      let hi = ys.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (ys[mid] <= target) lo = mid;
        else hi = mid;
      }
      const span = ys[hi] - ys[lo] || 1;
      travelled = Math.min(length, (lo + (target - ys[lo]) / span) * step);
    }

    const path = pathRef.current;
    const p = path.getPointAtLength(travelled);
    const ahead = path.getPointAtLength(Math.min(length, travelled + 2));
    const behind = path.getPointAtLength(Math.max(0, travelled - 2));
    const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
    carRef.current.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle}) scale(1.3)`);
    for (const el of [pavedRef.current, glowRef.current]) el.style.strokeDashoffset = String(length - travelled);
    if (fillRef.current) fillRef.current.style.clipPath = `inset(0 ${100 - (travelled / length) * 100}% 0 0)`;

    let last = -1;
    for (const pin of m.pins) if (pin.len <= travelled + 4) last = pin.index;
    if (last !== reachedRef.current) {
      reachedRef.current = last;
      setReached(last);
    }

    const on = box.top < window.innerHeight * EYE && box.bottom > window.innerHeight * EYE;
    if (on !== hudRef.current) {
      hudRef.current = on;
      setHudOn(on);
    }
  }, []);

  // Sample the path once per layout so scrolling only does a binary search.
  useLayoutEffect(() => {
    if (!geo || !pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const step = 3;
    const count = Math.ceil(length / step) + 1;
    const ys = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      ys[i] = path.getPointAtLength(Math.min(length, i * step)).y;
      if (i > 0 && ys[i] < ys[i - 1]) ys[i] = ys[i - 1];
    }
    const lenAtY = (y) => {
      let i = 0;
      while (i < count - 1 && ys[i] < y - 0.5) i += 1;
      return Math.min(length, i * step);
    };
    const pins = geo.pins.map((pin) => ({ index: pin.index, y: pin.y, len: lenAtY(pin.y) }));
    measure.current = { ys, step, length, pins };
    for (const el of [pavedRef.current, glowRef.current]) el.style.strokeDasharray = `${length} ${length}`;

    const next = {};
    for (const pin of pins) next[route[pin.index].id] = pin.len / length;
    setMarks(next);
    update();
  }, [geo, update]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [update]);

  const currentChapter =
    [...chapters].reverse().find((item) => route.indexOf(item) <= reached) || chapters[0];
  const accent = colorAt(Math.max(0, reached));

  useEffect(() => {
    onActive?.(currentChapter);
  }, [currentChapter, onActive]);

  const jumpTo = useCallback((id, behavior = "smooth") => {
    const m = measure.current;
    const wrap = wrapRef.current;
    if (!m || !wrap) return;
    const index = route.findIndex((item) => item.id === id);
    const pin = m.pins.find((item) => item.index === index);
    if (!pin) return;
    const top = window.scrollY + wrap.getBoundingClientRect().top + pin.y - window.innerHeight * EYE + 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : behavior });
  }, []);

  useImperativeHandle(ref, () => ({ jumpTo }), [jumpTo]);

  return (
    <section className="road" id="road" ref={wrapRef} style={{ "--accent": accent }} aria-label="The road, 2021 to 2026">
      {geo && (
        <svg className="road-svg" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
          <defs>
            <linearGradient id="paved" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.h}>
              {geo.grad.map((stop) => (
                <stop key={`${stop.offset}-${stop.color}`} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          {geo.spurs.map((spur) => (
            <g key={spur.index} className={`spur ${reached >= spur.index ? "is-lit" : ""}`} style={{ "--c": route[spur.index].color }}>
              <path d={spur.d} className="spur-base" />
              <path d={spur.d} className="spur-lane" />
            </g>
          ))}
          <path d={geo.d} className="road-edge" />
          <path ref={pathRef} d={geo.d} className="road-base" />
          <path d={geo.d} className="road-lane" />
          <path ref={glowRef} d={geo.d} className="road-glow" stroke="url(#paved)" filter="url(#glow)" />
          <path ref={pavedRef} d={geo.d} className="road-paved" stroke="url(#paved)" />
        </svg>
      )}
      {geo && (
        <svg className="road-svg road-top" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
          <g ref={carRef} className="car" style={{ "--c": accent }}>
            <Car />
          </g>
        </svg>
      )}

      {route.map((item, index) => {
        const lit = reached >= index ? "is-reached" : "";
        if (item.kind === "year") {
          return (
            <div key={item.id} className={`row row-year ${item.small ? "is-small" : ""} ${lit}`} style={{ "--c": colorAt(index) }}>
              {!item.small && <span className="year-ghost" aria-hidden="true">{item.label}</span>}
              <span className="pin pin-year" data-road={index}>
                <span className="checkpoint">{item.label}</span>
              </span>
            </div>
          );
        }
        if (item.kind === "side") {
          return (
            <div key={item.id} id={item.id} className={`row row-side side-${item.side} ${lit}`} style={{ "--c": item.color }}>
              <span className="pin pin-way" data-road={index} />
              <span className="pin pin-exit" data-spur={index}>
                <span className="pin-dot" />
              </span>
              <SideCard item={item} onOpen={onOpen} />
            </div>
          );
        }
        return (
          <div
            key={item.id}
            id={item.id}
            className={`row row-stop side-${item.side} ${item.finish ? "is-finish" : ""} ${lit}`}
            style={{ "--c": item.color }}
          >
            <span className="pin pin-stop" data-road={index}>
              <span className="pin-ring" />
              <span className="pin-dot" />
              {item.finish && <span className="flag" aria-hidden="true" />}
              {item.finish && reached >= index && <Confetti />}
            </span>
            <StopCard item={item} onOpen={onOpen} />
          </div>
        );
      })}

      <div className={`hud ${hudOn ? "is-on" : ""}`} style={{ "--c": currentChapter.color }} aria-hidden={!hudOn}>
        <div className="hud-now">
          <span className="hud-dot" />
          <span className="hud-when">{currentChapter.when}</span>
          <span className="hud-title">{currentChapter.short || currentChapter.title}</span>
        </div>
        <div className="hud-track">
          <span className="hud-rail" />
          <span className="hud-fill" ref={fillRef} />
          {chapters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`hud-stop ${item.kind === "side" ? "is-side" : ""} ${route.indexOf(item) <= reached ? "is-reached" : ""}`}
              style={{ left: `${(marks[item.id] ?? 0) * 100}%`, "--c": item.color }}
              onClick={() => jumpTo(item.id)}
              tabIndex={hudOn ? 0 : -1}
              aria-label={`Drive to ${item.short || item.title}, ${item.when}`}
            >
              <span className="hud-tip">{item.short || item.title}</span>
            </button>
          ))}
        </div>
        <button type="button" className="hud-open" onClick={() => onOpen(currentChapter.id)} tabIndex={hudOn ? 0 : -1}>
          Story <FiArrowRight />
        </button>
      </div>
    </section>
  );
});

export default Road;
