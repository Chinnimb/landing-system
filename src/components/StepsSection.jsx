import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import EyebrowPill from "./EyebrowPill";
import SectionCard from "./SectionCard";

export default function StepsSection({ data, brand }) {
  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[22px] px-[18px] py-[30px]">
      <EyebrowPill>{data.eyebrow}</EyebrowPill>
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">
        {data.title.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>

      {data.items.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="flex w-full max-w-[306px] items-start gap-[12px] rounded-[16px] border border-[rgba(216,199,242,0.5)] px-[14px] py-[14px]"
        >
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border border-[#8B5CF6] text-[13px] font-bold text-[#7C3AED]">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold text-[15px] leading-[18px] text-[#121213]">{step.title}</p>
            <p className="font-normal text-[13px] leading-[15px] text-[#636369]">{step.body}</p>
          </div>
        </motion.div>
      ))}

      <CtaButton {...data.cta} gradient brand={brand} />
    </SectionCard>
  );
}
