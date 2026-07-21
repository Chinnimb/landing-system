import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import FadeInSection from "./FadeInSection";

export default function WhySection({ data, brand }) {
  return (
    <FadeInSection className="flex w-full max-w-[342px] flex-col items-center gap-[20px] rounded-[28px] bg-white px-[18px] py-[30px] shadow-[0_8px_28px_rgba(139,92,246,0.12)]">
      <p className="max-w-[306px] text-center font-bold text-[12px] leading-[14px] text-[#7C3AED]">{data.eyebrow}</p>
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">
        {data.title.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      <p className="max-w-[306px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.body}</p>
      <p className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">{data.subtitle}</p>
      <p className="max-w-[306px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.subtitleBody}</p>

      <ul className="flex w-full max-w-[306px] flex-col gap-[16px]">
        {data.checks.map((check, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-[10px] text-[14px] leading-[17px] text-[#121213]"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.12)] text-[12px] font-bold text-[#16A34A]">
              ✓
            </span>
            <span className="font-medium">{check}</span>
          </motion.li>
        ))}
      </ul>

      <CtaButton {...data.cta} gradient brand={brand} />
    </FadeInSection>
  );
}
