import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import EyebrowPill from "./EyebrowPill";
import SectionCard from "./SectionCard";

export default function BloodworkCoversSection({ data, brand }) {
  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[20px] px-[18px] py-[30px]">
      <EyebrowPill>{data.eyebrow}</EyebrowPill>
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">{data.title}</h2>
      <p className="max-w-[306px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.subtitle}</p>

      <ul className="flex w-full max-w-[306px] flex-col gap-[16px]">
        {data.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-[10px] text-[14px] leading-[17px] text-[#121213]"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[rgba(241,88,190,0.12)] text-[12px] font-bold text-[#F158BE]">
              ✓
            </span>
            <span className="font-medium">{item}</span>
          </motion.li>
        ))}
      </ul>

      <CtaButton {...data.cta} gradient brand={brand} />
    </SectionCard>
  );
}
