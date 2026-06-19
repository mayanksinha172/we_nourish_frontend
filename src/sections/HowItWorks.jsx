import { motion } from 'framer-motion';
import { STEPS, CALENDLY } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={`section-paper ${styles.section}`}>
      <FadeUp className="section-header">
        <span className="eyebrow">THE PROCESS</span>
        <h2>From first call to lasting results</h2>
      </FadeUp>

      <div className={styles.grid}>
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
            whileHover={{ y: -6, boxShadow: '0 12px 36px rgba(56,24,72,.12)' }}
          >
            <div className={styles.circle}>{i + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </motion.div>
        ))}
      </div>

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

      <FadeUp className="section-cta" delay={.2}>
        <motion.a
          href={CALENDLY} target="_blank" rel="noopener"
          className="btn-primary"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
        >
          Book Free Call
        </motion.a>
      </FadeUp>
    </section>
  );
}
