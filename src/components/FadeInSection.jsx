import { motion } from "framer-motion";

/**
 * Envoltorio reutilizable: hace fade-in + slide-up cuando la sección
 * entra en viewport. Se usa para animar cada "card" de la landing
 * sin repetir la misma config de motion en cada componente.
 */
export default function FadeInSection({ children, delay = 0, className = "", style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
