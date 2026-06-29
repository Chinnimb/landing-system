import { motion } from "framer-motion";

/**
 * CTA reutilizable. `gradient` = true usa el gradiente de marca,
 * si no, usa el color secundario sólido (config.brand.secondaryColor).
 */
export default function CtaButton({ label, sublabel, gradient, brand, icon, className = "" }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex w-full max-w-[324px] flex-col items-center justify-center gap-[2px] rounded-[14px] px-[18px] py-[13px] text-center text-white shadow-sm cursor-pointer ${className}`}
      style={{
        background: gradient ? brand.accentGradient : brand.secondaryColor,
      }}
    >
      <span className="font-bold text-[14px] leading-[17px]">
        {icon ? `${icon} ` : ""}
        {label}
      </span>
      <span className="font-medium text-[11px] leading-[13px] opacity-90">{sublabel}</span>
    </motion.button>
  );
}
