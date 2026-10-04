import portrait from "../assets/Images/Portrait.jpg";
import yolo1 from "../assets/Images/YoloDetection1.jpg";
import yolo2 from "../assets/Images/YoloDetection2.jpg";
import mapping1 from "../assets/Images/Mapping1.jpg";
import result1 from "../assets/Images/Parking_Space7_result.jpg";
import icmPresenting from "../assets/Images/ICM-presenting.jpg";
import icmBadge from "../assets/Images/ICM-badge.jpg";
import icmCertificate from "../assets/Images/ICM-certificate.jpg";
import csteamLogo from "../assets/Images/CSTeam-logo.png";
import disneyland from "../assets/Images/Disneyland.jpg";
import gucGraduation from "../assets/Images/GUC-graduation.jpg";
import gucDegree from "../assets/Images/GUC-degree.jpg";
import ipcsCertificate from "../assets/Images/IPCS-certificate.jpg";
import henkelPhoto from "../assets/Images/Henkel-ThinkTech.jpg";
import henkelLanding from "../assets/Images/Henkel-landing.jpg";
import henkelResults from "../assets/Images/Henkel-results.jpg";
import disneylandCastle from "../assets/Images/Disneyland-castle.jpg";
import seitechPhoto from "../assets/Images/SEITech.jpg";
import seitechLogo from "../assets/Images/SEITech-logo.png";
import voisCertificate from "../assets/Images/VOIS-certificate.jpg";
import voisLogo from "../assets/Images/VOIS-logo.png";
import qlmLogo from "../assets/Images/QLM-logo.png";

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
    line: "Fourth place at the Henkel ThinkTech Hackathon, Gliss edition, with an AI hair care advisor for Schwarzkopf Gliss.",
    color: "#ff7a59",
    story: [
      "The brief was Schwarzkopf Gliss. We built a digital hair care advisor: take a photo of your hair, answer a short quiz, and it tells you which Gliss line fits you, with a full shampoo, conditioner and mask routine.",
      "The camera step runs face detection in the browser with TensorFlow.js to guide you into frame. The photo goes to Gemini Vision, which reads dryness, shine, frizz, split ends and damage. A seven-question adaptive quiz covers what a photo can't see, like colouring and heat styling.",
      "The match comes from retrieval: semantic search over a Gliss product knowledge base with sentence transformers, then an LLM on Groq picks the line and explains why. The last step lets you try on the hairstyle of that line's celebrity ambassador with an AI hair swap.",
      "React, TypeScript and Vite on the front, FastAPI in Python on the back. It placed fourth.",
    ],
    images: [
      { src: henkelPhoto, alt: "Abdallah holding a Henkel sign in front of the Henkel ThinkTech Hackathon Gliss Edition backdrop.", caption: "At the Henkel ThinkTech Hackathon" },
      { src: henkelLanding, alt: "The app's landing page: a row of Gliss bottles above an Online Hair Quiz call to action.", caption: "The landing page" },
      { src: henkelResults, alt: "The results screen recommending Gliss Aqua Revive, with a routine and the image analysis.", caption: "A recommendation, with the routine and photo analysis" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/AbdallahAhmadd/Henkel-Hackathon" }],
  },
  {
    kind: "stop",
    id: "qlm",
    side: "right",
    when: "November 2025",
    title: "Joined QLM",
    tag: "Startup",
    line: "Founding engineer. The product was still becoming itself.",
    // QLM teal #9cc3c2 deepening into its navy #34394d.
    color: "#9cc3c2",
    gradient: "linear-gradient(150deg, #7fb0ae 0%, #4f7f86 42%, #34394d 100%)",
    wordmark: qlmLogo,
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
      {
        src: icmCertificate,
        alt: "IEEE certificate awarded to Abdallah Ahmed Hassan for contribution as presenter at the 37th International Conference on Microelectronics, 14 to 17 December 2025, Cairo.",
        caption: "Presenter certificate, ICM 2025",
      },
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
    when: "May 2026",
    title: "Optimization of Multi-AGV Scheduling for Airport Baggage Handling",
    short: "The fleet paper",
    tag: "IEEE paper · Presenter",
    line: "Published at the 2026 ICEENG International Conference for Innovations in Power and Control Systems (IPCS) at MTC in Cairo, where I presented it. Scheduling the robot fleets that move airport baggage.",
    color: "#7ddea2",
    citation: "Abdallah Ahmed Hassan, Abdelrahman Ewida, Haidy Ehab Elkenawy, Abdulrahman Bassem Bahy, Karim Mohamed Fathy, Dalia M. Mahfouz and Omar M. Shehata. 2026 ICEENG International Conference for Innovations in Power and Control Systems (IPCS), Cairo, Egypt, 11–14 May 2026, pp. 1–6. DOI: 10.1109/IPCS69631.2026.11604463",
    story: [
      "Mishandled baggage costs airports billions every year, and much of the fix comes down to how well the Automated Guided Vehicles (AGVs) that carry the bags are coordinated.",
      "We framed AGV scheduling as a multi-objective Vehicle Routing Problem with Time Windows on a bidirectional line, then put five approaches against each other: Simulated Annealing, a Genetic Algorithm and Ant Colony Optimization, a Q-Learning agent, and a Hybrid Artificial Bee Colony algorithm we proposed, which uses discrete moves for routing and continuous updates for timing.",
      "Across standard, small and high-pressure scenarios, the Hybrid ABC planned best: 61% better than first come, first served, with 40% fewer vehicles in the standard case. The Q-Learning agent answered in under a second, which is the trade-off the paper lands on: plan quality against real-time response.",
    ],
    images: [
      {
        src: ipcsCertificate,
        alt: "Certificate of participation for presenting the paper Optimization of Multi-AGV Scheduling for Airport Baggage Handling at IPCS 2026, held 11 to 14 May 2026 at MTC, Cairo.",
        caption: "Certificate for presenting at IPCS 2026",
      },
    ],
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11604463" },
      { label: "GitHub", href: "https://github.com/AbdallahAhmadd/luggage_handling_optimization" },
    ],
  },
  {
    kind: "stop",
    id: "launch",
    side: "left",
    when: "September 2026",
    title: "QLM launches",
    tag: "Launch",
    line: "The thing teachers open is live.",
    color: "#9cc3c2",
    gradient: "linear-gradient(150deg, #7fb0ae 0%, #4f7f86 42%, #34394d 100%)",
    wordmark: qlmLogo,
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
    images: [
      { src: gucGraduation, alt: "Abdallah in his graduation gown on the GUC ceremony lawn, under a Class 2026 banner.", caption: "Graduation day, Class of 2026" },
      { src: gucDegree, alt: "Abdallah's GUC degree certificate: Bachelor of Science in Media Engineering and Technology, Computer Science and Engineering.", caption: "The degree" },
    ],
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
