import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "917871873038";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi Mirastra Tech, I would like to discuss a project."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center group">
      {/* Tooltip / Badge */}
      <span className="hidden sm:inline-flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-medium shadow-2xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        Chat with us
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mirastra Tech on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer decoration-none"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        {/* FaWhatsapp Icon */}
        <FaWhatsapp className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-105" />
      </a>
    </div>
  );
}
