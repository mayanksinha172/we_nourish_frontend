import { motion } from 'framer-motion';
import { WA_NUTRITION } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={`section-paper ${styles.section}`}>
      <FadeUp className={styles.videoSlot} delay={.15}>
        <video
          src="/train.mp4"
          className={styles.demoVideo}
          controls
          playsInline
          preload="metadata"
        />
        <p className={styles.demoNote}>
          🎬 This is a demo placeholder to show how Arjita's intro video will appear here. The final video will be uploaded via Admin.
        </p>
      </FadeUp>

      <FadeUp className={styles.cta} delay={.2}>
        <motion.a
          href={WA_NUTRITION} target="_blank" rel="noopener"
          className="btn-primary lg"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
        >
          Book Free Call
        </motion.a>
      </FadeUp>
    </section>
  );
}
