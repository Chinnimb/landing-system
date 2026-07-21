import CtaButton from "./CtaButton";
import FadeInSection from "./FadeInSection";

export default function FinalCta({ data, brand }) {
  return (
    <FadeInSection className="flex w-full max-w-[342px] flex-col items-center gap-[18px] rounded-[28px] bg-white px-[18px] py-[30px] text-center shadow-[0_8px_28px_rgba(139,92,246,0.12)]">
      <p className="max-w-[306px] font-bold text-[28px] leading-[33px] text-[#121213]">{data.title}</p>
      <p className="max-w-[306px] font-medium text-[15px] leading-[18px] text-[#636369]">{data.body}</p>
      <CtaButton {...data.cta} gradient brand={brand} />
      <p className="max-w-[306px] font-medium text-[11px] leading-[13px] text-[#9a9a9a]">{data.footer}</p>
    </FadeInSection>
  );
}
