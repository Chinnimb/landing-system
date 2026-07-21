import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import EyebrowPill from "./EyebrowPill";

export default function Hero({ data, brand }) {
  return (
    <div className="flex w-full max-w-[342px] flex-col items-center gap-[18px] rounded-[28px] bg-white px-[18px] py-[26px] shadow-[0_8px_28px_rgba(139,92,246,0.12)]">
      <EyebrowPill>{data.eyebrow}</EyebrowPill>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[324px] text-center font-bold text-[28px] leading-[35px] text-[#1a1a1a]"
      >
        {data.headline.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-[306px] text-center font-medium text-[16px] leading-[19px] text-[#636369]"
      >
        {data.subheadline}
      </motion.p>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
        }}
        className="flex w-full max-w-[306px] flex-col gap-[9px]"
      >
        {data.problems.map((problem, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-start gap-[10px] text-[15px] leading-[18px] text-[#121213]"
          >
            <span className="w-[18px] text-center font-bold text-[16px] text-[#eb1f2e]">✕</span>
            <span className="font-medium">{problem}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-[370px] w-[216px] overflow-hidden rounded-[16px]"
      >
        <video
          src="/mel-intro.mp4"
          poster="/mel-intro-poster.jpg"
          controls
          playsInline
          className="h-full w-full object-cover"
        />
      </motion.div>

      <CtaButton {...data.cta} gradient brand={brand} />
    </div>
  );
}
