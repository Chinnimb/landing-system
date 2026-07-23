// ──────────────────────────────────────────────────────────────
// CONFIG POR INFLUENCER
// Este es el único archivo que debería cambiar entre proyectos.
// Cambiá textos, colores, fotos, CTA, oferta, testimonios, etc.
// Los componentes son "ciegos" al influencer: solo leen de acá.
// ──────────────────────────────────────────────────────────────

const ctaUrl = "https://partner.protocolhealthclub.com/leads?am_id=FitGurlMel";
const ctaLabel = "BOOK BLOODWORK + WELLNESS CONSULT";

const influencerConfig = {
  cta: { label: ctaLabel, url: ctaUrl },

  brand: {
    name: "Protocol Health Club",
    accentGradient: "linear-gradient(90deg, #D5CAFB 0%, #FFCFEC 49%, #F158BE 100%)",
    secondaryColor: "#8B5CF6",
    darkColor: "#1a1f1f",
  },

  hero: {
    eyebrow: "PERSONALIZED WOMEN'S WELLNESS",
    headline: ["Personalized Women's Wellness."],
    subheadline:
      "Bloodwork and wellness consult built for women to optimize body composition, energy, sleep, and cognition.",
    bullets: ["200+ women transformed", "Physician-supervised protocols", "Real protocols, real results"],
    image: "https://www.figma.com/api/mcp/asset/c0f7d708-a49f-477d-9cb7-ba9ef02e8778",
    cta: { label: ctaLabel, url: ctaUrl },
  },

  why: {
    title: "Normal Is Not Optimal",
    body:
      "If your body and mind feels \"off\". It's time let's stop guessing and understand what's going on inside your body 🔬",
    bullets: [
      "Fat loss feels impossible",
      "Building muscle is harder",
      "Metabolism has slowed",
      "Energy is inconsistent",
      "Sleep isn't what it used to be",
      "Cravings hit harder than ever",
    ],
    cta: { label: ctaLabel, url: ctaUrl },
  },

  bloodworkCovers: {
    eyebrow: "LABS FIRST",
    title: "Our Bloodwork Covers",
    subtitle: "The biomarkers that matter most.",
    items: ["Hormone levels", "Nutrient deficiencies", "Inflammation", "What's impacting recovery", "Overall wellness"],
    cta: { label: ctaLabel, url: ctaUrl },
  },

  transformation: {
    eyebrow: "THIS IS THE FIRST STEP IN YOUR TRANSFORMATION",
    title: "My Healthiest Self After 40 — Because I Finally Knew What My Body Needed",
    image: "/mel-before-after.png",
    eyebrow2: "LEARN WHAT YOUR BODY NEEDS AS WELL",
    cases: [
      { tag: "Case 01 \u00b7 Casey", quote: "\u201cTrying to get in shape has been a constant struggle. I was doing a lot wrong with my health, and needed this feedback to finally course correct.\u201d" },
      { tag: "Case 02 \u00b7 Kim", quote: "\u201cHaving a baseline for my health has been a game changer. I know exactly what I needed to fix, and look forward to my next appointment to see how much progress I made.\u201d" },
      { tag: "Case 03 \u00b7 Hannah", quote: "\u201cWoah! I did not realize how much was happening inside my body. Having this level of clarity takes all the guessing out of losing weight.\u201d" },
    ],
    cta: { label: ctaLabel, url: ctaUrl },
  },

  steps: {
    eyebrow: "SEAMLESS TO GET STARTED",
    title: ["Four Easy Steps.", "Zero Overwhelm."],
    items: [
      { title: "Purchase your bloodwork", body: "Get 25% off your first lab plus a consult." },
      { title: "Visit a local facility", body: "We coordinate the check and lab work." },
      { title: "Book your consult", body: "Review your labs with medical staff." },
      { title: "Walk away with a plan", body: "A clear plan for coaching, retesting, and next steps." },
    ],
    cta: { label: "START WITH BLOODWORK TODAY", url: ctaUrl },
  },

  options: {
    eyebrow: "CAN I CONTINUE WITH WELLNESS COACHING?",
    title: "What Are My Options After My Wellness Consult?",
    bullets: ["24/7 Guided Wellness Coaching", "Quarterly bloodwork testing", "Peptides & hormone therapies"],
    cards: [
      { title: "Wellness", subtitle: "Consulting", emoji: "🩺" },
      { title: "Peptides", subtitle: "GLP-1s", image: "/peptides-bottle.png" },
      { title: "Test", subtitle: "Biomarkers", emoji: "🧪" },
      { title: "Hormone", subtitle: "Therapies", emoji: "💊" },
    ],
  },

  faq: {
    title: ["MORE FAQ'S"],
    subtitle: "Quick answers before you book.",
    items: [
      { q: "Is this the same as MakeWellness?", a: "MakeWellness is a wonderful product. It's natural oral peptides. Bloodwork is for those who want to understand what is happening inside their body. From there, you will be able to discuss injectable peptides or hormone treatment with the medical staff. You can bundle MakeWellness with hormone therapies and peptides to further enhance your results!" },
      { q: "Why review bloodwork with trained medical staff?", a: "Trained medical staff can interpret your results in context — catching patterns a generic reference range would miss — and turn them into a plan that's actually safe and specific to you." },
      { q: "Who is Protocol Health Club?", a: "Protocol Health Club is a telehealth-driven wellness practice that pairs comprehensive bloodwork with guided, medically-supervised optimization plans." },
      { q: "What can optimization help with?", a: "Energy, sleep, metabolism, hormone balance, muscle recovery, and overall longevity — all guided by what your own labs show." },
      { q: "What are peptides?", a: "Peptides are short chains of amino acids that can support recovery, metabolism, and overall wellness when used under medical guidance." },
      { q: "What is HRT? (Hormone Replacement Therapy)", a: "HRT restores hormone levels — like estrogen, progesterone, or testosterone — that have declined, helping relieve symptoms tied to that imbalance." },
    ],
    cta: { label: "Have questions? Text my team here!", sublabel: "I'll help you choose where to start", url: ctaUrl },
  },

  finalCta: {
    title: "Ready to stop guessing?",
    body: "Start with bloodwork, review it with medical staff, and get a plan that actually matches your body.",
    cta: { label: ctaLabel, url: ctaUrl },
    footer: "Protocol Health Club • Bloodwork • Consults • Glow Up",
  },
};

export default influencerConfig;
