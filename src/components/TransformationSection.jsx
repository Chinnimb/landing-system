import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./CtaButton";
import EyebrowPill from "./EyebrowPill";
import SectionCard from "./SectionCard";

export default function TransformationSection({ data, brand }) {
  const [index, setIndex] = useState(0);
  const total = data.cases.length;

  const go = (dir) => setIndex((prev) => (prev + dir + total) % total);

  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[18px] px-[18px] py-[30px]">
      <EyebrowPill>{data.eyebrow}</EyebrowPill>
      <h2 className="max-w-[306px] text-center font-bold text-[26px] leading-[31px] text-[#121213]">{data.title}</h2>

      <motion.img
        src={data.image}
        alt="Transformation"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-[330px] w-[306px] rounded-[20px] object-cover"
      />

      <EyebrowPill>{data.eyebrow2}</EyebrowPill>

      <div className="relative w-[306px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-[10px] rounded-[18px] p-[14px]"
            style={{
              background: "linear-gradient(149deg, #F3E8FF 7%, #FDE7EE 103%)",
            }}
          >
            <p className="font-bold text-[#7C3AED]">{data.cases[index].tag}</p>
            <p className="text-[13px] leading-[15px] text-[#121213]">{data.cases[index].quote}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-[140px] items-center justify-between">
        <button onClick={() => go(-1)} aria-label="Anterior" className="cursor-pointer text-[20px] text-[#7C3AED] opacity-70 transition hover:opacity-100">
          ‹
        </button>
        <div className="flex items-center gap-[6px]">
          {data.cases.map((_, i) => (
            <motion.span
              key={i}
              onClick={() => setIndex(i)}
              animate={{ width: i === index ? 24 : 8, backgroundColor: i === index ? brand.secondaryColor : "#e8d9f5" }}
              transition={{ duration: 0.25 }}
              className="h-[8px] cursor-pointer rounded-full"
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Siguiente" className="cursor-pointer text-[20px] text-[#7C3AED] opacity-70 transition hover:opacity-100">
          ›
        </button>
      </div>

      <CtaButton {...data.cta} gradient brand={brand} />
    </SectionCard>
  );
}
