import architectural from "../assets/image4.jpg";
import interior from "../assets/interior-design-concept-5-jpg.webp";
import interior2 from "../assets/Classic-House-Interior-Design-4.1581603609.7419.webp";
import site from "../assets/AdobeStock_1167201201_Preview.jpeg";
import team from "../assets/AdobeStock_1380842662_Preview.jpeg";
import web from "../assets/accounting-website-design.jpg";
import web2 from "../assets/ecommerce-website-design-examples-1024x768.jpg";
import marketing from "../assets/digital-marketing.jpg";
import social from "../assets/social-media.jpg";
import creative from "../assets/modern-minimal-business-powerpoint-template-130-1-768x512.jpg";

// TODO: replace placeholder email/social links with the real ones.
export const SITE = {
  name: "Code & Concrete",
  full: "Code & Concrete Construction",
  phone: "9812186293",
  email: "codeandconcrete18@gmail.com",
  address: ["Ratamakai Chowk, Imadole", "Lalitpur, Nepal"],
  whatsappNumber: "9844414084",
  whatsapp: "https://wa.me/9779844414084?text=Hello%20Code%20%26%20Concrete%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  instagram: "https://instagram.com/",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const ALL_SERVICES = [
  {
    id: "architectural",
    title: "Architectural Design",
    short: "Homes planned around how you live — structure, light and flow.",
    body: [
      "We design residential homes that are as functional as they are striking — maximising space, protecting structural integrity and creating a natural flow between rooms.",
      "Detailed plans, 3D renderings and floor layouts are shaped around your lifestyle, your taste and the land they sit on.",
    ],
    images: [architectural],
  },
  {
    id: "interior",
    title: "Interior Design",
    short: "Interiors that balance elegance, comfort and identity.",
    body: [
      "Every space tells a story. We design interiors that combine elegance, function and brand identity, while keeping comfort at the centre.",
      "From corporate offices to family homes, we create rooms that reflect the client's vision and hold up to daily life.",
    ],
    images: [interior, interior2],
  },
  {
    id: "site",
    title: "Site Evaluation",
    short: "Terrain, sun, wind and access — understood before we draw a line.",
    body: [
      "Before any design begins we study the land: terrain, sunlight, wind patterns, accessibility and neighbouring structures.",
      "That groundwork means the finished building is practical, safe and perfectly suited to its location.",
    ],
    images: [site],
  },
  {
    id: "web",
    title: "Web Development",
    short: "Fast, responsive websites and web apps for growing businesses.",
    body: [
      "We turn ideas into powerful digital experiences — visually appealing, functional and scalable websites and web applications tailored to your needs.",
      "From responsive marketing sites to complex web solutions, we focus on engagement and products that set a higher standard.",
    ],
    images: [web, web2],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    short: "Get found online and turn attention into enquiries.",
    body: [
      "We help construction, real-estate and design businesses get found online — search visibility, targeted ad campaigns and email outreach built around real enquiries, not vanity numbers.",
      "Every campaign is planned, tracked and reported clearly, so you can see what is working and where your budget is going.",
    ],
    images: [marketing],
  },
  {
    id: "social",
    title: "Social Media Management",
    short: "Consistent, on-brand content that builds trust with your audience.",
    body: [
      "We plan, create and publish content across your social channels — project showcases, behind-the-scenes updates and brand storytelling in a consistent voice.",
      "From content calendars to community replies and monthly performance reports, we keep your presence active so you can focus on the work.",
    ],
    images: [social],
  },
  {
    id: "creative",
    title: "Creative Design",
    short: "Logos, banners and presentations with a clear point of view.",
    body: [
      "We craft logos, banners and presentations that capture your brand's identity and make a lasting first impression.",
      "Clarity, creativity and visual harmony — so your message lands on every platform.",
    ],
    images: [creative],
  },
  {
    id: "project",
    title: "Construction & Project Management",
    short: "One accountable team taking your build from first sketch to final handover.",
    body: [
      "Complete construction oversight from planning to delivery: schedules, budgets, contractors, site safety and quality checks handled with clear communication.",
      "You always know where the project stands, and what happens next.",
    ],
    images: [team],
  },
];

// Construction-led order; digital services come last.
const ORDER = ["architectural", "site", "interior", "project", "web", "marketing", "social", "creative"];
const DIGITAL = ["web", "marketing", "social", "creative"];
export const SERVICES = ORDER.map((id) => ALL_SERVICES.find((s) => s.id === id)!);
export const BUILD_SERVICES = SERVICES.filter((s) => !DIGITAL.includes(s.id));
export const DIGITAL_SERVICES = SERVICES.filter((s) => DIGITAL.includes(s.id));

export const STATS = [
  { value: 20, suffix: "+", label: "Projects completed" },
  { value: 19, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "+", label: "Awards won" },
];
