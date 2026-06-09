import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RECIPES_TEASER } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './RecipesTeaser.module.css';

export default function RecipesTeaser() {
  return (
    <section className={`section-paper ${styles.section}`}>
      <FadeUp className="section-header">
        <span className="eyebrow">FROM THE KITCHEN</span>
        <h2>Recipes that love you back</h2>
      </FadeUp>

      <div className={styles.grid}>
        {RECIPES_TEASER.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: .48, ease: [.22,1,.36,1], delay: i * .07 }}
          >
            <Link to="/recipes" className={styles.card}>
              <div className={styles.img} style={{ backgroundImage: `url(${r.img})` }} />
              <div className={styles.info}>
                <span className="recipe-tag">{r.tag}</span>
                <h3>{r.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <FadeUp className="section-cta" delay={.15}>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}>
          <Link to="/recipes" className="btn-outline">Explore all recipes</Link>
        </motion.div>
      </FadeUp>
    </section>
  );
}
