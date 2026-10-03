const shapes = {
  guc: (
    <>
      <path d="M8 46 V28 H18 V46 M46 46 V28 H56 V46 M14 28 H50 M32 28 V18" />
      <path d="M22 18 H42 L32 8 Z" />
      <path d="M6 52 H58" />
    </>
  ),
  multicore: (
    <>
      <rect x="10" y="14" width="30" height="16" rx="3" />
      <rect x="18" y="24" width="30" height="16" rx="3" />
      <rect x="26" y="34" width="28" height="16" rx="3" />
    </>
  ),
  seitech: (
    <>
      <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" />
      <circle cx="32" cy="32" r="6" />
    </>
  ),
  vois: (
    <>
      <circle cx="22" cy="32" r="4" />
      <path d="M30 24 a12 12 0 0 1 0 16 M38 16 a22 22 0 0 1 0 32 M46 10 a30 30 0 0 1 0 44" />
    </>
  ),
  parking: (
    <>
      <rect x="8" y="10" width="48" height="44" rx="4" />
      <path d="M24 10 V54 M40 10 V54 M8 32 H56" />
      <rect className="fill" x="12" y="16" width="8" height="12" />
    </>
  ),
  thinktech: (
    <>
      <path d="M20 10 H44 V24 a12 12 0 0 1 -24 0 Z" />
      <path d="M20 14 H12 a8 8 0 0 0 8 12 M44 14 H52 a8 8 0 0 1 -8 12" />
      <path d="M32 36 V46 M22 54 H42 L38 46 H26 Z" />
    </>
  ),
  qlm: (
    <>
      <path d="M8 44 H56" />
      <path d="M14 44 a18 18 0 0 1 36 0" />
      <circle className="fill" cx="32" cy="34" r="6" />
      <path d="M32 14 V20 M14 22 l4 4 M50 22 l-4 4" />
    </>
  ),
  optimization: (
    <>
      <path d="M6 48 H58" />
      <rect x="8" y="32" width="14" height="10" rx="2" />
      <rect x="26" y="24" width="14" height="10" rx="2" />
      <rect x="44" y="34" width="14" height="10" rx="2" />
      <path d="M15 28 Q24 14 33 20 Q44 26 51 30" strokeDasharray="3 4" />
    </>
  ),
  launch: (
    <>
      <path d="M18 56 V10" />
      <path className="fill" d="M18 12 H48 L40 22 L48 32 H18 Z" />
    </>
  ),
  graduation: (
    <>
      <path d="M4 24 L32 12 L60 24 L32 36 Z" />
      <path d="M16 30 V44 c0 4 8 8 16 8 s16 -4 16 -8 V30" />
      <path d="M60 24 V40" />
      <circle className="fill" cx="60" cy="42" r="2.5" />
    </>
  ),
  csteam: (
    <>
      <path d="M6 18 H26 a6 6 0 0 1 6 6 V50 a6 6 0 0 0 -6 -6 H6 Z" />
      <path d="M58 18 H38 a6 6 0 0 0 -6 6 V50 a6 6 0 0 1 6 -6 H58 Z" />
    </>
  ),
  espresso: (
    <>
      <path d="M14 28 H44 V40 a12 12 0 0 1 -12 12 H26 a12 12 0 0 1 -12 -12 Z" />
      <path d="M44 32 H48 a5 5 0 0 1 0 10 H43" />
      <path d="M24 22 q3 -5 0 -10 M33 22 q3 -5 0 -10" />
      <path d="M10 56 H48" />
    </>
  ),
};

export default function Mark({ id, className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={`mark ${className}`} aria-hidden="true">
      {shapes[id] || shapes.launch}
    </svg>
  );
}

export function Badge({ item, size = "md" }) {
  if (item.logo) {
    return (
      <span className={`badge badge-${size} badge-logo`}>
        <img src={item.logo} alt={`${item.title} logo`} />
      </span>
    );
  }
  return (
    <span className={`badge badge-${size}`}>
      <Mark id={item.id} />
    </span>
  );
}
