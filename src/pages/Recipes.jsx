import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_RECIPES, RECIPE_CATS, PRODUCTS } from '../data/content';
import FadeUp from '../components/FadeUp';
import PageMeta from '../components/PageMeta';
import { useCheckout } from '../components/BuyModal';
import { api } from '../services/api';
import styles from './Recipes.module.css';

function toBackendShape(p, i) {
  return {
    id: String(i),
    title: p.title,
    description: p.desc,
    price_inr: parseInt(p.price.replace('₹', ''), 10),
    img_url: p.img,
  };
}

const CAT_LABELS = {
  all: 'All', 'high-protein': 'High-Protein', 'fat-loss': 'Fat-Loss',
  breakfast: 'Breakfast', snacks: 'Snacks', drinks: 'Drinks',
  desserts: 'Desserts', salads: 'Salads', soups: 'Soups & Curries',
  dips: 'Dips & Chutneys', 'air-fried': 'Air-Fried',
};

export default function Recipes() {
  const [query, setQuery]       = useState('');
  const [cat,   setCat]         = useState('all');
  const [toolbarHidden, setToolbarHidden] = useState(false);
  const [products, setProducts] = useState([]);
  const { openBuy, modals }     = useCheckout();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 60) {
        setToolbarHidden(false);
      } else if (y > lastScrollY.current + 6) {
        setToolbarHidden(true);
      } else if (y < lastScrollY.current - 6) {
        setToolbarHidden(false);
      }
      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    api.getProducts()
      .then(data => { if (data.length) setProducts(data); })
      .catch(() => setProducts(PRODUCTS.map(toBackendShape)));
  }, []);

  const displayProducts = products.length
    ? products
    : PRODUCTS.map(toBackendShape);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_RECIPES.filter(r => {
      const catOk  = cat === 'all' || r.tag === cat;
      const textOk = !q ||
        r.title.toLowerCase().includes(q) ||
        r.ingredients?.some(ing => ing.toLowerCase().includes(q));
      return catOk && textOk;
    });
  }, [query, cat]);

  return (
    <>
      <PageMeta
        title="Healthy Indian Recipes — Free & Premium | WeNourish"
        description="Browse healthy Indian recipes by nutritionist Arjita. Search by name or ingredient, filter by category. Free to view."
      />
      {/* Hero */}
      <section className={styles.hero}>
        <FadeUp className={styles.heroInner}>
          <span className="eyebrow">THE RECIPE LIBRARY</span>
          <h1>Recipes that love you back</h1>
          <p className={styles.heroSub}>Free recipes, open to everyone. Premium books available to buy — delivered instantly.</p>
        </FadeUp>
      </section>

      <div className={`${styles.toolbar} ${toolbarHidden ? styles.toolbarHidden : ''}`}>
        <FadeUp delay={.1} className={styles.searchWrap}>
          <input
            type="search"
            placeholder="Search by recipe name or ingredient…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={styles.search}
            aria-label="Search recipes"
          />
        </FadeUp>

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
      </div>

      {/* Free Recipes Grid */}
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

      {/* Premium Recipe Books */}
      <section className={`section-plum ${styles.books_section}`}>
        <FadeUp className="section-header">
          <span className="eyebrow" style={{ color: 'var(--green-tint)' }}>RECIPE BOOKS</span>
          <h2 style={{ color: 'white' }}>Take the kitchen with you</h2>
          <p style={{ color: 'rgba(255,255,255,.75)', maxWidth: 500, margin: '12px auto 0' }}>
            Curated recipe collections by Arjita — download instantly after purchase.
          </p>
        </FadeUp>
        <div className={styles.booksGrid}>
          {displayProducts.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.bookCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, ease: [.22, 1, .36, 1], delay: i * .1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,.25)' }}
            >
              <span className={styles.bookBadge}>Premium</span>
              <img src={p.img_url} alt={p.title} className={styles.bookCover} loading="lazy" />
              <div className={styles.bookBody}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className={styles.bookPrice}>₹{p.price_inr}</p>
                <motion.button
                  type="button"
                  className={styles.buyBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: .98 }}
                  onClick={() => openBuy(p)}
                >
                  Buy — ₹{p.price_inr}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {modals}
    </>
  );
}
