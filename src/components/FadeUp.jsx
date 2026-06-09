import { motion } from 'framer-motion';

/* Wraps children with a scroll-triggered fade-up animation */
export default function FadeUp({ children, delay = 0, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: .55, ease: [.22, 1, .36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
