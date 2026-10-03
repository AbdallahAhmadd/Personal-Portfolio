import portrait from "../assets/Images/Portrait.jpg";
import yolo1 from "../assets/Images/YoloDetection1.jpg";
import yolo2 from "../assets/Images/YoloDetection2.jpg";
import mapping1 from "../assets/Images/Mapping1.jpg";
import result1 from "../assets/Images/Parking_Space7_result.jpg";
import icmPresenting from "../assets/Images/ICM-presenting.jpg";
import icmBadge from "../assets/Images/ICM-badge.jpg";
import csteamLogo from "../assets/Images/CSTeam-logo.png";
import disneyland from "../assets/Images/Disneyland.jpg";
import disneylandCastle from "../assets/Images/Disneyland-castle.jpg";
import seitechPhoto from "../assets/Images/SEITech.jpg";
import seitechLogo from "../assets/Images/SEITech-logo.png";
import voisCertificate from "../assets/Images/VOIS-certificate.jpg";
import voisLogo from "../assets/Images/VOIS-logo.png";

export const profile = {
  name: "Abdallah Ahmed",
  role: "Computer Engineer",
  road: "German University in Cairo, 2021–2026",
  badge: "Founding Engineer @ QLM",
  intro:
    "Five years at the GUC, drawn as a road, from the first day to graduation. Internships, two published papers, a hackathon, and a startup I joined early and watched launch.",
  portrait,
  portraitAlt:
    "Abdallah Ahmed smiling in a white t-shirt on a terrace above a hillside city at sunset.",
  links: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/abdallah-ahmed-hassan/" },
    { label: "GitHub", icon: "github", href: "https://github.com/AbdallahAhmadd" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/abdallahahmed___/" },
  ],
};

export const highlights = [
  { value: "2", label: "papers published" },
  { value: "4th", label: "Henkel ThinkTech" },
  { value: "255", label: "PRs closed at QLM" },
  { value: "1,842", label: "GitHub contributions in 2026" },
  { value: "1,268", label: "GitHub contributions in 2025" },
];

// The road, top to bottom. Three kinds of entry:
//   { kind: "year" }  a checkpoint on the road
//   { kind: "stop" }  a milestone on the road, `side` is where its card sits
//   { kind: "side" }  a side road branching off, for things that ran alongside
//
// To add a story: put paragraphs in `story`.
// To add pictures: drop them in src/assets, import them at the top of this
// file, and add { src, alt, caption } to `images`. The first one is the cover.
// `short` is a shorter title for tight spots like the dashboard, and
// `citation` shows under a paper's story.
// Set `gradient` to a CSS gradient to paint a stop's card in brand colors,
// and `wordmark` to a logo to show it, on a white plate, in place of the title.
// A stacked logo can set `wordmarkHeight` (px) for a taller plate.

export const route = [
  { kind: "year", id: "y2021", label: "2021" },
  {
    kind: "stop",
    id: "guc",
    side: "left",
    when: "2021",
    title: "Starting at the GUC",
    tag: "Start",
    line: "Computer engineering at the German University in Cairo. The whole road runs through here, until 2026.",
    color: "#f0c14a",
    story: [],
    images: [],
  },
  { kind: "year", id: "y2022", label: "2022", small: true },
  { kind: "year", id: "y2023", label: "2023", small: true },
  { kind: "year", id: "y2024", label: "2024" },
  {
    kind: "stop",
    id: "multicore",
    side: "right",
    when: "2024",
    title: "Multicore",
    tag: "Work",
    line: "Full-stack work.",
    color: "#3ecfb2",
    story: [],
    images: [],
  },
  { kind: "year", id: "y2025", label: "2025" },
  {
    kind: "stop",
    id: "seitech",
    side: "left",
    when: "June 2025",
    title: "SEITech",
    tag: "Work",
    line: "Software engineering. Later, a seat beside the parking thesis.",
    // SEITech navy #003366 with its purple accent.
    color: "#8a52a9",
    gradient: "linear-gradient(140deg, #0b4a8c 0%, #003366 45%, #2b2a66 78%, #8a52a9 100%)",
    wordmark: seitechLogo,
    wordmarkHeight: 92,
    story: [],
    images: [
      {
        src: seitechPhoto,
        alt: "Abdallah wearing a SEITech badge, smiling in front of a green plant wall with the SEITech logo.",
        caption: "At SEITech",
      },
    ],
  },
  {
    kind: "stop",
    id: "vois",
    side: "right",
    when: "August 2025",
    title: "VOIS",
    tag: "Internship",
    line: "A frontend internship.",
    // The VOIS logo gradient: Vodafone red into magenta into deep purple.
    color: "#e60000",
    gradient: "linear-gradient(140deg, #e30000 0%, #c01553 45%, #79007b 80%, #421344 100%)",
    wordmark: voisLogo,
    story: [],
    images: [
      {
        src: voisCertificate,
        alt: "Abdallah holding his VOIS certificate of appreciation in front of a red and orange wall that reads Together We Can.",
        caption: "Certificate of appreciation",
      },
    ],
  },
  {
    kind: "stop",
    id: "thinktech",
    side: "left",
    when: "October 2025",
    title: "Henkel ThinkTech",
    tag: "Hackathon · 4th place",
    line: "Henkel ThinkTech hackathon. Fourth place.",
    color: "#ff7a59",
    story: [],
    images: [],
  },
  {
    kind: "stop",
    id: "qlm",
    side: "right",
    when: "November 2025",
    title: "Joined QLM",
    tag: "Startup",
    line: "Founding engineer. The product was still becoming itself.",
    color: "#ff4d6a",
    story: [],
    images: [],
    links: [{ label: "qlm.pro", href: "https://qlm.pro" }],
  },
  {
    kind: "stop",
    id: "parking",
    side: "left",
    when: "December 2025",
    title: "AI-Based Parking Lot Management System Using Computer Vision",
    short: "The parking paper",
    tag: "IEEE paper · Presenter",
    line: "Published at the 37th IEEE International Conference on Microelectronics (ICM 2025) in Cairo, where I presented it. Co-authored with Dr. Eman Azab.",
    color: "#ffb020",
    citation: "Abdallah Ahmed Hassan and Eman Azab. 2025 37th International Conference on Microelectronics (ICM), Cairo, Egypt, 14–17 December 2025, pp. 1–6. DOI: 10.1109/ICM66518.2025.11322484",
    story: [],
    images: [
      { src: icmPresenting, alt: "Abdallah presenting the parking challenges slide of his paper at ICM 2025.", caption: "Presenting at ICM 2025" },
      { src: icmBadge, alt: "Abdallah's ICM 2025 conference badge, with the conference hall behind it.", caption: "My ICM 2025 badge" },
      { src: yolo1, alt: "YOLO model detecting cars in a parking lot camera feed.", caption: "Detection on a live lot feed" },
      { src: mapping1, alt: "Parking bays mapped onto the camera view.", caption: "Mapping the bays" },
      { src: result1, alt: "Occupied and free bays marked on a parking lot image.", caption: "Occupied and free, bay by bay" },
      { src: yolo2, alt: "A second YOLO detection example in a parking lot.", caption: "Another lot, same model" },
    ],
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11322484" },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/publication/399703888_AI-Based_Parking_Lot_Management_System_Using_Computer_Vision",
      },
    ],
  },
  { kind: "year", id: "y2026", label: "2026" },
  {
    kind: "stop",
    id: "optimization",
    side: "right",
    when: "April 2026",
    title: "The fleet paper",
    tag: "Research",
    line: "A second paper, on scheduling airport baggage vehicles.",
    color: "#7ddea2",
    story: [],
    images: [],
    links: [{ label: "Read the paper", href: "https://doi.org/10.1109/IPCS69631.2026.11604463" }],
  },
  {
    kind: "stop",
    id: "launch",
    side: "left",
    when: "September 2026",
    title: "QLM launches",
    tag: "Launch",
    line: "The thing teachers open is live.",
    color: "#ffe08a",
    story: [],
    images: [],
    links: [{ label: "qlm.pro", href: "https://qlm.pro" }],
  },
  {
    kind: "stop",
    id: "graduation",
    side: "right",
    when: "3 October 2026",
    title: "Graduated from the GUC",
    tag: "Finish line",
    line: "Graduated from the German University in Cairo. The road that started here in 2021 ends here too.",
    color: "#f0c14a",
    finish: true,
    story: [],
    images: [],
  },
];

export const chapters = route.filter((item) => item.kind !== "year");

// The "Off the clock" side of the site: everything that isn't a CV line.
// To add a trip, add the city to its country in `places`, or a new
// { country, cities } entry. `home` is shown but not counted.
export const offClock = {
  intro: "Same person, laptop closed. I run a coffee shop, teach, play tennis, and keep trying to fill a passport.",
  photo: {
    src: disneylandCastle,
    alt: "Abdallah in Mickey ears, smiling in front of the Disneyland castle and a bed of pink and white flowers.",
    caption: "Disneyland, 2024",
  },
  coffee: {
    kicker: "I run a coffee shop",
    title: "Espresso Perfetto",
    line: "I manage the coffee shop in downtown Katameya.",
    where: "Downtown Katameya",
  },
  teaching: {
    kicker: "I teach",
    title: "IGCSE computer science",
    line: "Privately, with CSTeam.",
    logo: csteamLogo,
  },
  tennis: {
    kicker: "I play",
    title: "Tennis",
    line: "My favourite way to log off.",
  },
  snapshot: {
    src: disneyland,
    alt: "Abdallah tipping an Indiana Jones style hat in front of a temple ride at Disneyland.",
    caption: "Disneyland, 2024",
  },
  places: [
    { country: "Egypt", cities: ["Cairo"], home: true },
    { country: "UK", cities: ["London", "Manchester"] },
    { country: "Italy", cities: ["Rome", "Milan", "Venice", "Florence", "Bologna", "Verona", "Como", "Sirmione"] },
    { country: "France", cities: ["Paris"] },
    { country: "Germany", cities: ["Berlin", "Munich"] },
    { country: "Austria", cities: ["Vienna", "Salzburg"] },
    { country: "Switzerland", cities: ["Interlaken", "Thun"] },
    { country: "Czechia", cities: ["Prague"] },
    { country: "Türkiye", cities: ["Istanbul"] },
  ],
};
