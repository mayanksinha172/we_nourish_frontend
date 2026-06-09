import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIdx(i => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: d => ({ opacity: 0, x: d * 60 }),
    center:    { opacity: 1, x: 0 },
    exit:  d => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <section className={`section-stone ${styles.section}`}>
      <FadeUp className="section-header">
        <span className="eyebrow">CLIENT STORIES</span>
        <h2>What clients say</h2>
      </FadeUp>

      <div className={styles.carousel}>
        <button className={styles.btn} onClick={() => go(-1)} aria-label="Previous">
          <i className="fa-solid fa-arrow-left-long" />
        </button>

        <div className={styles.track}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className={styles.card}
              custom={dir}
              variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: .38, ease: [.22,1,.36,1] }}
            >
              <div className={styles.imgSlot} />
              <blockquote className={styles.quote}>
                {TESTIMONIALS[idx].quote}
              </blockquote>
              <p className={styles.name}>
                {TESTIMONIALS[idx].name}
                <span className={styles.tag}>{TESTIMONIALS[idx].tag}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.btn} onClick={() => go(1)} aria-label="Next">
          <i className="fa-solid fa-arrow-right-long" />
        </button>
      </div>

      <div className={styles.dots}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
            onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
