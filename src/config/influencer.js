// ──────────────────────────────────────────────────────────────
// CONFIG POR INFLUENCER
// Este es el único archivo que debería cambiar entre proyectos.
// Cambiá textos, colores, fotos, CTA, oferta, testimonios, etc.
// Los componentes son "ciegos" al influencer: solo leen de acá.
// ──────────────────────────────────────────────────────────────

const influencerConfig = {
  brand: {
    name: "Protocol Health Club",
    accentGradient:
      "linear-gradient(100deg, rgba(210,73,5,0.93) 0%, rgb(255,140,0) 49%, rgba(255,0,200,0.99) 109%)",
    secondaryColor: "#ff9500",
    darkColor: "#1a1f1f",
    mintBorder: "rgba(173,245,219,0.9)",
  },

  hero: {
    eyebrow: "Telehealth · Blood panel + Medical consultation",
    headline: ["Let's Fix Your Metabolism", "& Optimize Your Hormones!"],
    subheadline:
      "If your body feels different lately, let's stop guessing and look at what your labs are actually saying.",
    problems: [
      "Fat loss feels impossible",
      "Putting on muscle is harder",
      "Slowing metabolism",
      "Low energy levels",
      "Poor sleep",
      "Deep food cravings",
    ],
    image: "https://www.figma.com/api/mcp/asset/c0f7d708-a49f-477d-9cb7-ba9ef02e8778",
    cta: { label: "Start Your Glow Up Now!", sublabel: "25% off Labs + Medical Consult" },
  },

  why: {
    eyebrow: "Your Labs Show You What Workout & Nutrition Programs Can't!",
    title: ["Stop Guessing!", "Your Body Deserves Better"],
    body:
      "Get comprehensive labs with my team to understand what's happening inside your body — hormones, nutrients, inflammation, recovery, and overall wellness.",
    subtitle: "Our Labs Cover",
    subtitleBody: "The biomarkers that matter most.",
    checks: [
      "Hormone levels",
      "Nutrient deficiencies",
      "Inflammation",
      "What's impacting recovery",
      "Overall wellness",
    ],
    cta: { label: "Start With Labs Today", sublabel: "25% off Labs + Medical Consult" },
  },

  transformation: {
    eyebrow: "THIS IS THE FIRST STEP IN YOUR TRANSFORMATION",
    title: "My Healthiest Self After 40 For A Reason!",
    image: "https://www.figma.com/api/mcp/asset/82ac316a-18ec-4274-84fc-db810c50850b",
    eyebrow2: "LEARN WHAT YOUR BODY NEEDS AS WELL",
    cases: [
      { tag: "Case 01", quote: "\u201cI don't know why I waited so long to get labs. Everything finally made sense.\u201d" },
      { tag: "Case 02", quote: "\u201cThe review helped me understand what was actually impacting my energy and recovery.\u201d" },
      { tag: "Case 03", quote: "\u201cI stopped guessing and had clear next steps for my metabolism and hormones.\u201d" },
    ],
    cta: { label: "Start Your Glow Up Now!", sublabel: "25% off Labs + Medical Consult" },
  },

  steps: {
    eyebrow: "SEAMLESS TO GET STARTED",
    title: ["Four Steps.", "Zero Overwhelm."],
    items: [
      { title: "Purchase your labs", body: "Get 25% off your first lab and a free consultation with my medical staff." },
      { title: "Go to a local facility", body: "We serve all 50 states and help you find a facility if needed." },
      { title: "Book your 60-min consultation", body: "Once your bloodwork is complete, schedule your review with my medical staff." },
      { title: "Walk away with a plan", body: "Review your health, metabolism, hormones, recovery, and next steps." },
    ],
    cta: { label: "Start Your Glow Up Now!", sublabel: "Labs + Medical Consult" },
  },

  faq: {
    title: ["Let Me", "Answer All Your Questions!"],
    subtitle: "Quick answers before you book.",
    items: [
      { q: "Who is this for?", a: "Women over 30 who feel changes in energy, recovery, metabolism, sleep, focus, hormones, or performance." },
      { q: "Why review labs with trained medical staff?", a: "Trained staff break down your labs into a personalized, actionable plan — not generic advice from trends." },
      { q: "Who is Protocol Health Club?", a: "Our team of trained medical staff reviewing labs and providing peptide and hormone optimization treatments." },
      { q: "What can optimization help with?", a: "Energy, fat loss, recovery, inflammation, skin, sleep, mood, bone density, and more." },
      { q: "What is Guided Optimization & Concierge Telehealth?", a: "White glove concierge treatment with 24/7 support for peptide and hormone optimization." },
      { q: "What are peptides?", a: "Small \"messenger\" proteins that signal your body to repair tissue, burn fat, or produce hormones." },
      { q: "What is HRT? (Hormone Replacement Therapy)", a: "Replacing declining hormone levels (estrogen/progesterone) as you approach menopause." },
    ],
    cta: { label: "Have questions? Text my team here!", sublabel: "I'll help you choose where to start" },
  },

  finalCta: {
    title: "Ready to stop guessing?",
    body: "Start with labs, review them with medical staff, and get a plan that actually matches your body.",
    cta: { label: "Get Started Today", sublabel: "25% off Labs + Medical Consult" },
    footer: "Protocol Health Club • Labs • Consults • Glow Up",
  },
};

export default influencerConfig;
