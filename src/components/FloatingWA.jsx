import { motion } from 'framer-motion';
import { WA_NUTRITION } from '../data/content';
import styles from './FloatingWA.module.css';

export default function FloatingWA() {
  return (
    <motion.a
      href={WA_NUTRITION}
      target="_blank" rel="noopener"
      aria-label="Chat on WhatsApp"
      className={styles.fab}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: .95 }}
    >
      <i className="fa-brands fa-whatsapp" />
    </motion.a>
  );
}
