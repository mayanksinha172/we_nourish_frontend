import { motion } from 'framer-motion';
import { CALENDLY } from '../data/content';
import styles from './MobileCTA.module.css';

export default function MobileCTA() {
  return (
    <motion.div
      className={styles.bar}
      initial={{ y: 80 }} animate={{ y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 28 }}
    >
      <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary" style={{ width: '100%', maxWidth: 360 }}>
        Book Free Call
      </a>
    </motion.div>
  );
}
