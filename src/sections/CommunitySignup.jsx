import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import styles from './CommunitySignup.module.css';

export default function CommunitySignup() {
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setDone(true); };

  return (
    <section className={styles.section}>
      <FadeUp>
        <span className="eyebrow" style={{ color: 'var(--green-tint)', textAlign: 'center' }}>JOIN THE COMMUNITY</span>
        <h2 style={{ color: 'white', textAlign: 'center', maxWidth: 580, margin: '12px auto 14px' }}>
          Free recipes and nutrition tips, every week
        </h2>
        <p style={{ color: 'rgba(255,255,255,.75)', textAlign: 'center', maxWidth: 480, margin: '0 auto 32px' }}>
          Join 600,000+ people making food work for their lives — not against them.
        </p>
      </FadeUp>

      {done ? (
        <motion.p
          className={styles.thanks}
          initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}
        >
          🎉 You're in! Check your inbox for a welcome from us.
        </motion.p>
      ) : (
        <FadeUp delay={.1}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text"  placeholder="Your name"     required className={styles.input} />
            <input type="email" placeholder="Email address"  required className={styles.input} />
            <input type="tel"   placeholder="Phone (optional)"       className={styles.input} />
            <motion.button
              type="submit" className="btn-outline-white"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }}
            >
              Get free recipes
            </motion.button>
          </form>
        </FadeUp>
      )}
    </section>
  );
}
