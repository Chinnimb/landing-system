import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./CtaButton";
import SectionCard from "./SectionCard";

export default function FaqSection({ data, brand }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[16px] px-[18px] py-[30px]">
      <h2 className="max-w-[306px] text-center font-bold text-[28px] leading-[33px] text-[#121213]">
        {data.title.join(" ")}
      </h2>
      <p className="max-w-[306px] text-center font-medium text-[15px] leading-[18px] text-[#636369]">{data.subtitle}</p>

      {data.items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="w-[306px] cursor-pointer rounded-[20px] p-[14px]"
            style={{
              border: "1px solid transparent",
              backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(180deg, #D8C7F2 0%, #F7D9D2 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            onClick={() => setOpenIndex(isOpen ? -1 : i)}
          >
            <div className="flex w-full items-center justify-between">
              <p className="flex-1 font-bold text-[15px] leading-[18px] text-[#121213]">{item.q}</p>
              <span
                className="flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[19px] font-normal"
                style={{ color: isOpen ? "#7C3AED" : "#A0A0A6" }}
              >
                {isOpen ? "−" : "+"}
              </span>
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
                  {item.bullets ? (
                    <ul className="flex flex-col gap-[10px]">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-[13px] leading-[18px] text-[#636369]">
                          <span className="font-bold text-[#121213]">{b.title}</span>
                          {" — "}
                          {b.desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[13px] leading-[20px] text-[#636369]">{item.a}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <CtaButton {...data.cta} gradient brand={brand} />
    </SectionCard>
  );
}
