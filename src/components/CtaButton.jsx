import { motion } from "framer-motion";
import influencerConfig from "../config/influencer";

export default function CtaButton({ label, sublabel, className = "", url = influencerConfig.cta.url, brand = influencerConfig.brand }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex w-full max-w-[324px] flex-col items-center justify-center gap-[2px] rounded-full px-[18px] py-[13px] text-center text-white shadow-[0_8px_20px_rgba(139,92,246,0.35)] cursor-pointer no-underline transition-opacity duration-150 hover:opacity-90 ${className}`}
      style={{ background: brand.accentGradient }}
    >
      <span className="font-bold text-[14px] leading-[17px]">{label}</span>
      <span className="font-medium text-[11px] leading-[13px] opacity-80">{sublabel}</span>
    </motion.a>
  );
}
