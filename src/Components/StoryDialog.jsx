import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { chapters } from "../content/site.js";
import Mark, { Badge } from "./Mark.jsx";

function Gallery({ item }) {
  const [at, setAt] = useState(0);
  const start = useRef(null);
  const images = item.images || [];

  useEffect(() => {
    const onKey = (event) => {
      if (images.length < 2) return;
      if (event.key === "ArrowRight") setAt((i) => (i + 1) % images.length);
      if (event.key === "ArrowLeft") setAt((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (!images.length) {
    return (
      <div className="gallery is-empty">
        {item.logo ? (
          <img className="gallery-logo" src={item.logo} alt={`${item.title} logo`} />
        ) : (
          <Mark id={item.id} className="gallery-mark" />
        )}
        <span className="stamp">{item.when}</span>
      </div>
    );
  }

  const shown = images[at];
  const go = (delta) => setAt((i) => (i + delta + images.length) % images.length);

  return (
    <div className="gallery">
      <figure
        className="gallery-main"
        onPointerDown={(event) => {
          start.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (start.current == null) return;
          const dx = event.clientX - start.current;
          start.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <img key={shown.src} src={shown.src} alt={shown.alt} draggable="false" />
        {shown.caption && <figcaption>{shown.caption}</figcaption>}
        {images.length > 1 && (
          <>
            <button type="button" className="gallery-arrow prev" onClick={() => go(-1)} aria-label="Previous photo">
              <FiChevronLeft />
            </button>
            <button type="button" className="gallery-arrow next" onClick={() => go(1)} aria-label="Next photo">
              <FiChevronRight />
            </button>
            <span className="gallery-count">
              {at + 1} / {images.length}
            </span>
          </>
        )}
      </figure>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className={i === at ? "is-on" : ""}
              onClick={() => setAt(i)}
              aria-label={`Photo ${i + 1}`}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StoryDialog({ id, onClose, onNavigate }) {
  const ref = useRef(null);
  const index = chapters.findIndex((item) => item.id === id);
  const item = chapters[index];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
    document.documentElement.classList.toggle("is-reading", Boolean(item));
  }, [item]);

  useEffect(() => {
    ref.current?.querySelector(".story-scroll")?.scrollTo(0, 0);
  }, [id]);

  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <dialog
      ref={ref}
      className="story"
      style={{ "--c": item?.color }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current.close();
      }}
      aria-labelledby="story-title"
    >
      {item && (
        <div className="story-shell">
          <header
            className={`story-head ${item.gradient ? "is-branded" : ""}`}
            style={item.gradient ? { "--brand": item.gradient } : undefined}
          >
            {item.wordmark ? <img className="wordmark wordmark-head" src={item.wordmark} alt="" style={item.wordmarkHeight ? { height: Math.round(item.wordmarkHeight * 0.6) } : undefined} /> : <Badge item={item} />}
            <div className="story-where">
              <span className="chip">{item.tag}</span>
              <span className="when">{item.when}</span>
            </div>
            <button type="button" className="story-close" onClick={() => ref.current.close()} aria-label="Close story">
              <FiX />
            </button>
          </header>

          <div className="story-scroll">
            <Gallery key={item.id} item={item} />
            <div className="story-body">
              <p className="story-step">
                {item.kind === "side" ? "Side road" : `Stop ${chapters.filter((c) => c.kind === "stop").indexOf(item) + 1}`}
              </p>
              <h2 id="story-title">{item.title}</h2>
              <p className="story-lead">{item.line}</p>
              {item.story?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {item.citation && <p className="story-cite">{item.citation}</p>}
              {item.links?.length > 0 && (
                <p className="story-links">
                  {item.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <FiArrowUpRight />
                    </a>
                  ))}
                </p>
              )}
            </div>
          </div>

          <footer className="story-foot">
            <button type="button" disabled={!prev} onClick={() => onNavigate(prev.id)} style={{ "--c": prev?.color }}>
              <FiArrowLeft />
              <span>
                <small>Back</small>
                {prev ? prev.short || prev.title : "The start"}
              </span>
            </button>
            <span className="story-dots" aria-hidden="true">
              {chapters.map((c) => (
                <i key={c.id} className={c.id === id ? "is-on" : ""} style={{ "--c": c.color }} />
              ))}
            </span>
            <button type="button" className="is-next" disabled={!next} onClick={() => onNavigate(next.id)} style={{ "--c": next?.color }}>
              <span>
                <small>Next stop</small>
                {next ? next.short || next.title : "End of the road"}
              </span>
              <FiArrowRight />
            </button>
          </footer>
        </div>
      )}
    </dialog>
  );
}
