import { motion } from 'framer-motion';
import { CALENDLY, WA_NUTRITION, PRESS } from '../data/content';
import arjita from '../assets/arjita.jpg';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .12, delayChildren: .25 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, ease: [.22,1,.36,1] } },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Text side */}
      <motion.div className={styles.content} variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          Nutritionist · Wellness Expert · Author
        </motion.span>

        <motion.h1 variants={item}>
          Real food.<br />
          <em className="editorial">Real results.</em>
        </motion.h1>

        <motion.p className={styles.sub} variants={item}>
          Personalised nutrition consulting built on a decade of clinical experience —
          no deprivation, no crash diets, no guilt.
        </motion.p>

        <motion.div className={styles.btns} variants={item}>
          <motion.a
            href={CALENDLY} target="_blank" rel="noopener"
            className="btn-primary lg"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
          >
            Book Free Call
          </motion.a>
          <motion.a
            href={WA_NUTRITION} target="_blank" rel="noopener"
            className="btn-wa"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
          >
            <i className="fa-brands fa-whatsapp" /> Message on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div className={styles.cred} variants={item}>
          <div className={styles.credRow}>
            <div className={styles.credStat}>
              <span className={styles.credNum}>600K+</span>
              <span className={styles.credLabel}>community</span>
            </div>
            <div className={styles.credStat}>
              <span className={styles.credNum}>10+</span>
              <span className={styles.credLabel}>years experience</span>
            </div>
          </div>
          <div className={styles.pressRow}>
            <span className={styles.pressLabel}>As seen in</span>
            {PRESS.map(p => (
              <span key={p} className={styles.pressChip}>{p}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Photo side */}
      <motion.div
        className={styles.photoWrap}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7, ease: [.22,1,.36,1], delay: .2 }}
      >
        <div className={styles.blob} />
        <img src={arjita} alt="Arjita — WeNourish nutritionist" className={styles.photo} />
        <p className={styles.caption}>Arjita — Guiding your journey to better health.</p>
      </motion.div>
    </section>
  );
}
