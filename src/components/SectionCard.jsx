import FadeInSection from "./FadeInSection";

/**
 * Card visual compartida por todas las secciones grandes de la landing.
 * Fondo blanco 82% + borde 1px inside con gradient lavender→peach, sin shadow.
 * Centralizado acá para cambiar el estilo de todas las cards desde un solo lugar.
 *
 * background-clip pinta la capa de relleno ENCIMA de la capa del gradient del
 * borde (ambas dentro del mismo elemento): si el relleno usa alpha real
 * (rgba con opacidad), el gradient de abajo se filtra y tiñe todo el interior,
 * no solo el borde. Por eso el relleno es un color plano ya pre-mezclado:
 * blanco al 82% sobre el fondo de página #FBFCFE da rgb(254,254,255).
 * Se ve igual de translúcido pero sin depender de que el navegador soporte
 * mask-composite ni de ningún truco de capas.
 */
const FILL_COLOR = "#FEFEFF";
const BORDER_GRADIENT = `linear-gradient(${FILL_COLOR}, ${FILL_COLOR}), linear-gradient(180deg, #D8C7F2 0%, #F7D9D2 100%)`;

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
