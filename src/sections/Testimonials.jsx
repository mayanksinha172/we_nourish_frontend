import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import styles from './Testimonials.module.css';

function avatarUrl(name) {
  const encoded = encodeURIComponent(name.replace('.', ''));
  return `https://ui-avatars.com/api/?name=${encoded}&background=287830&color=fff&size=128&bold=true`;
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIdx(i => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[idx];

  const variants = {
    enter: d => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: d => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Testimonials</p>
        <h2>What our clients say</h2>
      </div>

      <div className={styles.slideshow}>
        <div className={styles.slideRow}>
          <button type="button" className={styles.btn} onClick={() => go(-1)} aria-label="Previous testimonial">
            <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className={styles.content}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: .38, ease: [.22, 1, .36, 1] }}
            >
              <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
              <p className={styles.quote}>{t.quote}</p>
              {(t.beforeImg || t.afterImg) && (
                <div className={styles.beforeAfter}>
                  {t.beforeImg && (
                    <div className={styles.baSlot}>
                      <img src={t.beforeImg} alt={`${t.displayName || t.name} before`} loading="lazy" />
                      <span className={styles.baLabel}>Before</span>
                    </div>
                  )}
                  {t.afterImg && (
                    <div className={styles.baSlot}>
                      <img src={t.afterImg} alt={`${t.displayName || t.name} after`} loading="lazy" />
                      <span className={styles.baLabel}>After</span>
                    </div>
                  )}
                </div>
              )}
              <img
                src={avatarUrl(t.name)}
                alt={t.displayName || t.name}
                className={styles.avatar}
                loading="lazy"
              />
              <p className={styles.name}>{t.displayName || t.name}</p>
              {t.outcome && <p className={styles.outcome}>{t.outcome}</p>}
            </motion.div>
          </AnimatePresence>

          <button type="button" className={styles.btn} onClick={() => go(1)} aria-label="Next testimonial">
            <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.veggieWrap}>
        <img src="/testimonials-bg.png" alt="" loading="lazy" />
      </div>
    </section>
  );
}
