import CtaButton from "./CtaButton";
import SectionCard from "./SectionCard";

export default function FinalCta({ data, brand }) {
  return (
    <SectionCard className="flex w-full max-w-[342px] flex-col items-center gap-[18px] px-[18px] py-[30px] text-center">
      <p className="max-w-[306px] font-bold text-[28px] leading-[33px] text-[#121213]">{data.title}</p>
      <p className="max-w-[306px] font-medium text-[15px] leading-[18px] text-[#636369]">{data.body}</p>
      <CtaButton {...data.cta} gradient brand={brand} />
      <p className="max-w-[306px] font-medium text-[11px] leading-[13px] text-[#9a9a9a]">{data.footer}</p>
    </SectionCard>
  );
}
