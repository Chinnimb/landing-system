import influencerConfig from "../config/influencer";
import Hero from "./Hero";
import WhySection from "./WhySection";
import TransformationSection from "./TransformationSection";
import StepsSection from "./StepsSection";
import FaqSection from "./FaqSection";
import FinalCta from "./FinalCta";

/**
 * MobileLandingPage
 * ──────────────────────────────────────────────────────────
 * Template reutilizable. NO hardcodear textos/colores acá.
 * Para un nuevo influencer: duplicar src/config/influencer.js
 * (o pasarle un config distinto por prop) y listo.
 */
export default function MobileLandingPage({ config = influencerConfig }) {
  const { brand } = config;

  return (
    <div className="flex min-h-screen w-full justify-center bg-[#fce7ef] py-[34px]">
      <div className="flex w-[390px] flex-col items-center gap-[26px] px-[16px]">
        <Hero data={config.hero} brand={brand} />
        <WhySection data={config.why} brand={brand} />
        <TransformationSection data={config.transformation} brand={brand} />
        <StepsSection data={config.steps} brand={brand} />
        <FaqSection data={config.faq} brand={brand} />
        <FinalCta data={config.finalCta} brand={brand} />
      </div>
    </div>
  );
}
