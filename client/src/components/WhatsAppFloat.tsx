import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../data/site";

// Floating chat button shown on every page.
const WhatsAppFloat = () => (
  <a
    href={SITE.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
    <FaWhatsapp size={30} className="relative" />
  </a>
);

export default WhatsAppFloat;
