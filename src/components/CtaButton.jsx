import { motion } from "framer-motion";
import influencerConfig from "../config/influencer";

export default function CtaButton({ label, sublabel, className = "", url = influencerConfig.cta.url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex w-full max-w-[324px] flex-col items-center justify-center gap-[2px] rounded-[14px] px-[18px] py-[13px] text-center text-white shadow-sm cursor-pointer no-underline bg-black hover:bg-[#1a1a1a] transition-colors duration-150 ${className}`}
    >
      <span className="font-bold text-[14px] leading-[17px]">{label}</span>
      <span className="font-medium text-[11px] leading-[13px] opacity-70">{sublabel}</span>
    </motion.a>
  );
}
