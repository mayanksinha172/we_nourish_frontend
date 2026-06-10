import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_RECIPES, RECIPE_CATS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './Recipes.module.css';

const CAT_LABELS = {
  all: 'All', 'high-protein': 'High-Protein', 'fat-loss': 'Fat-Loss',
  breakfast: 'Breakfast', snacks: 'Snacks', drinks: 'Drinks',
  desserts: 'Desserts', salads: 'Salads', soups: 'Soups & Curries',
  dips: 'Dips & Chutneys', 'air-fried': 'Air-Fried',
};

export default function Recipes() {
  const [query, setQuery] = useState('');
  const [cat,   setCat]   = useState('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_RECIPES.filter(r => {
      const catOk  = cat === 'all' || r.tag === cat;
      const textOk = !q || r.title.toLowerCase().includes(q);
      return catOk && textOk;
    });
  }, [query, cat]);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <FadeUp className={styles.heroInner}>
          <span className="eyebrow">THE RECIPE LIBRARY</span>
          <h1>Recipes that love you back</h1>
          <p className={styles.heroSub}>Free recipes, open to everyone. Premium books available to buy — delivered instantly.</p>
        </FadeUp>
      </section>

      <FadeUp delay={.1} className={styles.searchWrap}>
        <input
          type="search"
          placeholder="Search by recipe name…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={styles.search}
          aria-label="Search recipes"
        />
      </FadeUp>

      {/* Filter chips */}
      <div className={styles.filterBar}>
        {RECIPE_CATS.map(c => (
          <button
            key={c}
            className={`${styles.chip} ${c === cat ? styles.chipActive : ''}`}
            onClick={() => setCat(c)}
          >
            {CAT_LABELS[c]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className={`section-paper ${styles.grid_section}`}>
        {filtered.length === 0 && (
          <p style={{ textAlign:'center', color:'var(--muted-plum)', padding:'40px 0' }}>
            No recipes match — try a different search or category.
          </p>
        )}
        <div className={styles.grid}>
          {filtered.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .38, ease: [.22,1,.36,1], delay: i * .04 }}
              layout
            >
              <Link to={`/recipes/${r.slug}`} className={styles.card}>
                <div className={styles.img} style={{ backgroundImage: `url(${r.img})` }} />
                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <span className="recipe-tag">{CAT_LABELS[r.tag] || r.tag}</span>
                    <span className={styles.badge}>{r.free ? 'Free' : 'Premium'}</span>
                  </div>
                  <h3>{r.title}</h3>
                  <p className={styles.meta}>{r.time} · {r.kcal}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
