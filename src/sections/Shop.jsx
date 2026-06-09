import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <section className={`section-plum ${styles.section}`}>
      <FadeUp className="section-header">
        <span className="eyebrow" style={{ color: 'var(--green-tint)' }}>RECIPE BOOKS</span>
        <h2 style={{ color: 'white' }}>Take the kitchen with you</h2>
      </FadeUp>

      <div className={styles.grid}>
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,.2)' }}
          >
            <div className={`${styles.cover} ${styles[p.accent]}`} />
            <div className={styles.info}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{p.price}</span>
                <motion.button
                  className="btn-primary sm"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}
                  onClick={() => alert('Razorpay checkout coming soon')}
                >
                  Buy
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
