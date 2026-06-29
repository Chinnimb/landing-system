import CtaButton from "./CtaButton";
import FadeInSection from "./FadeInSection";

export default function FinalCta({ data, brand }) {
  return (
    <FadeInSection
      className="flex w-full max-w-[342px] flex-col items-center gap-[18px] rounded-[22px] border px-[18px] py-[30px] text-center"
      style={{ borderColor: "#e0e0db", background: brand.darkColor }}
    >
      <p className="max-w-[306px] font-bold text-[28px] leading-[33px] text-white">{data.title}</p>
      <p className="max-w-[306px] font-medium text-[15px] leading-[18px] text-[#d1dbd6]">{data.body}</p>
      <CtaButton {...data.cta} gradient brand={brand} />
      <p className="max-w-[306px] font-medium text-[11px] leading-[13px] text-[#a8b8b2]">{data.footer}</p>
    </FadeInSection>
  );
}
