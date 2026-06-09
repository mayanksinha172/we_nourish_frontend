import { motion } from 'framer-motion';
import { CALENDLY } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './ClosingCTA.module.css';

export default function ClosingCTA() {
  return (
    <section className={styles.section} id="booking">
      <FadeUp>
        <h2>Ready to make food work for you?</h2>
        <p>A free 15-minute call. No pressure, no commitment — just clarity on where to start.</p>
        <motion.a
          href={CALENDLY} target="_blank" rel="noopener"
          className="btn-primary lg"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: .97 }}
        >
          Book Free Call
        </motion.a>
      </FadeUp>
    </section>
  );
}
