import { motion } from "framer-motion";
import EyebrowPill from "./EyebrowPill";
import SectionCard from "./SectionCard";

export default function OptionsSection({ data }) {
  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[20px] px-[18px] py-[30px]">
      <EyebrowPill>{data.eyebrow}</EyebrowPill>
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">{data.title}</h2>

      <ul className="flex w-full max-w-[306px] flex-col gap-[14px]">
        {data.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-[10px] text-[14px] leading-[17px] text-[#636369]"
          >
            <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border border-[#F158BE] text-[10px] font-bold text-[#F158BE]">
              ✓
            </span>
            <span className="font-medium">{bullet}</span>
          </motion.li>
        ))}
      </ul>

      <div className="grid w-full max-w-[306px] grid-cols-2 gap-[12px] rounded-[22px] bg-[#F3F1FB] p-[12px]">
        {data.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex flex-col items-center gap-[10px] rounded-[16px] border border-[#F5C7E4] bg-white px-[12px] py-[16px]"
          >
            <div className="flex w-full flex-col items-start gap-[1px]">
              <p className="font-bold text-[15px] leading-[18px] text-[#121213]">{card.title}</p>
              <p className="font-bold text-[13px] leading-[16px] text-[#F158BE]">{card.subtitle}</p>
            </div>
            {card.image ? (
              <img src={card.image} alt={`${card.title} ${card.subtitle}`} className="h-[52px] w-auto object-contain" />
            ) : (
              <span className="text-[36px] leading-none">{card.emoji}</span>
            )}
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
}
