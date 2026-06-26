import { motion } from 'framer-motion';
import { WA_NUTRITION, WA_COLLAB } from '../data/content';
import styles from './ClosingCTA.module.css';

export default function ClosingCTA() {
  return (
    <section className={`section-fullbleed ${styles.section}`} id="booking">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [.22, 1, .36, 1] }}
      >
        <h2>Ready to make food work for you?</h2>
        <p>A free 15-minute call. No pressure, no commitment — just clarity on where to start.</p>
        <motion.a
          href={WA_NUTRITION}
          target="_blank"
          rel="noopener"
          className="btn-primary lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .97 }}
        >
          Book Free Call
        </motion.a>
        <motion.a
          href={WA_COLLAB}
          target="_blank"
          rel="noopener"
          className="btn-wa"
          style={{ marginTop: 16 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .97 }}
        >
          <i className="fa-brands fa-whatsapp" /> Message on brand collaboration
        </motion.a>
      </motion.div>
    </section>
  );
}
