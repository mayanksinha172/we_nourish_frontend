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
            transition={{ duration: .5, ease: [.22, 1, .36, 1], delay: i * .1 }}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,.2)' }}
          >
            <span className={styles.badge}>Premium</span>
            <img src={p.img} alt={p.title} className={styles.cover} loading="lazy" />
            <div className={styles.body}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className={styles.price}>{p.price}</p>
              <motion.button
                type="button"
                className={styles.buyBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .98 }}
                onClick={() => alert('Razorpay checkout coming soon')}
              >
                Buy — {p.price}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
