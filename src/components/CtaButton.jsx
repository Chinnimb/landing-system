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
      className={`flex w-full max-w-[324px] flex-col items-center justify-center gap-[2px] rounded-[4px] border border-[#FFCFEC] px-[18px] py-[13px] text-center text-[#1a1a1a] shadow-[0_8px_20px_rgba(241,88,190,0.25)] cursor-pointer no-underline transition-opacity duration-150 hover:opacity-90 ${className}`}
      style={{ background: brand.accentGradient }}
    >
      <span className="font-bold uppercase tracking-[0.08em] text-[14px] leading-[17px]">{label}</span>
      <span className="font-semibold uppercase tracking-[0.08em] text-[11px] leading-[13px] opacity-70">{sublabel}</span>
    </motion.a>
  );
}
