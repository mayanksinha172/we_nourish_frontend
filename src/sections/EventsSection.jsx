import { useState } from 'react';
import { motion } from 'framer-motion';
import { EVENTS_BG, EVENTS_NOTIFY_MESSAGE } from '../data/content';
import styles from './EventsSection.module.css';

export default function EventsSection() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setDone(true);
  };

  return (
    <section
      className={`section-fullbleed ${styles.section}`}
      style={{ backgroundImage: `linear-gradient(rgba(14, 13, 13, 0.55), rgba(0, 0, 0, 0.55)), url(${EVENTS_BG})` }}
    >
      <div className={styles.inner}>
        <h2>No live sessions right now</h2>
        <p className={styles.sub}>{EVENTS_NOTIFY_MESSAGE}</p>

        {done ? (
          <motion.p
            className={styles.success}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            You will be notified about upcoming sessions!
          </motion.p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: .96 }}
            >
              Notify me
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
