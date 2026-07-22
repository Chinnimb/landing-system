import FadeInSection from "./FadeInSection";

/**
 * Card visual compartida por todas las secciones grandes de la landing.
 * Fondo blanco 82% + borde 1px inside con gradient lavender→peach, sin shadow.
 * Centralizado acá para cambiar el estilo de todas las cards desde un solo lugar.
 */
const BORDER_GRADIENT =
  "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), linear-gradient(180deg, #D8C7F2 0%, #F7D9D2 100%)";

export default function SectionCard({ children, className = "", delay, fadeIn = true, radius = 28, style }) {
  const cardStyle = {
    borderRadius: `${radius}px`,
    border: "1px solid transparent",
    backgroundImage: BORDER_GRADIENT,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    ...style,
  };

  if (!fadeIn) {
    return (
      <div className={className} style={cardStyle}>
        {children}
      </div>
    );
  }

  return (
    <FadeInSection className={className} delay={delay} style={cardStyle}>
      {children}
    </FadeInSection>
  );
}
