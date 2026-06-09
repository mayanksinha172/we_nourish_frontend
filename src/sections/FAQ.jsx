import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './FAQ.module.css';

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.q} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: .22 }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .32, ease: [.22,1,.36,1] }}
            className={styles.aWrap}
          >
            <p className={styles.a}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={`section-paper ${styles.section}`}>
      <FadeUp className="section-header">
        <span className="eyebrow">COMMON QUESTIONS</span>
        <h2>Things people ask before booking</h2>
      </FadeUp>
      <div className={styles.list}>
        {FAQS.map((f, i) => (
          <FadeUp key={i} delay={i * .05}>
            <Item q={f.q} a={f.a} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
