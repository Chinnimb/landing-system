import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import SectionCard from "./SectionCard";

export default function WhySection({ data, brand }) {
  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[20px] px-[18px] py-[30px]">
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">{data.title}</h2>
      <p className="max-w-[306px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.body}</p>

      <ul className="flex w-full max-w-[306px] flex-col gap-[16px]">
        {data.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-[10px] text-[14px] leading-[17px] text-[#121213]"
          >
            <span className="w-[18px] shrink-0 text-center text-[16px] font-bold text-[#8B5CF6]">✕</span>
            <span className="font-medium">{bullet}</span>
          </motion.li>
        ))}
      </ul>

      <CtaButton {...data.cta} gradient brand={brand} />
    </SectionCard>
  );
}
