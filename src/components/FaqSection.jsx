import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./CtaButton";
import FadeInSection from "./FadeInSection";

export default function FaqSection({ data, brand }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <FadeInSection className="flex w-full max-w-[342px] flex-col items-center gap-[16px]">
      <h2 className="max-w-[342px] text-center font-bold text-[28px] leading-[33px] text-[#121213]">
        {data.title.join(" ")}
      </h2>
      <p className="max-w-[342px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.subtitle}</p>

      {data.items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="w-[306px] cursor-pointer rounded-[16px] border bg-white p-[14px]"
            style={{ borderColor: brand.mintBorder }}
            onClick={() => setOpenIndex(isOpen ? -1 : i)}
          >
            <div className="flex w-full items-center justify-between">
              <p className="flex-1 font-bold text-[15px] leading-[18px] text-[#121213]">{item.q}</p>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[20px]"
                style={{ color: isOpen ? "#753de5" : "#121213" }}
              >
                ›
              </motion.span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[13px] leading-[15px] text-[#636369]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <CtaButton {...data.cta} brand={brand} />
    </FadeInSection>
  );
}
