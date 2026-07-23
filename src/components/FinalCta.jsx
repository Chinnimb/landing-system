import CtaButton from "./CtaButton";
import FadeInSection from "./FadeInSection";

const BACKGROUND_GRADIENT = "linear-gradient(135deg, #D8C7F2 0%, #F7D9D2 100%)";

export default function FinalCta({ data, brand }) {
  return (
    <FadeInSection
      className="flex w-full max-w-[342px] flex-col items-center gap-[18px] px-[18px] py-[30px] text-center"
      style={{ background: BACKGROUND_GRADIENT, borderRadius: "28px" }}
    >
      <p className="max-w-[306px] font-bold text-[28px] leading-[33px] text-[#121213]">
        {data.title.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className="max-w-[306px] font-medium text-[15px] leading-[18px] text-[#636369]">{data.body}</p>
      <CtaButton {...data.cta} gradient brand={brand} />
    </FadeInSection>
  );
}
