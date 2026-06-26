import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS as STATIC_PRODUCTS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './Shop.module.css';
import { api } from '../services/api';
import { useCheckout } from '../components/BuyModal';

function toBackendShape(p, i) {
  return {
    id: String(i),
    title: p.title,
    description: p.desc,
    price_inr: parseInt(p.price.replace('₹', ''), 10),
    img_url: p.img,
  };
}

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { openBuy, modals } = useCheckout();

  useEffect(() => {
    api.getProducts()
      .then(data => { if (data.length) setProducts(data); })
      .catch(() => setProducts(STATIC_PRODUCTS.map(toBackendShape)));
  }, []);

  const displayProducts = products.length
    ? products
    : STATIC_PRODUCTS.map(toBackendShape);

  const previewProducts = displayProducts.slice(0, 2);
  const hasMoreBooks = displayProducts.length > 2;

  return (
    <>
      <section className={styles.section}>
        <FadeUp className="section-header">
          <span className={styles.eyebrow}>RECIPE BOOKS</span>
          <h2 className={styles.title}>Take the kitchen with you</h2>
        </FadeUp>

        <div className={styles.grid}>
          {previewProducts.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, ease: [.22, 1, .36, 1], delay: i * .1 }}
            >
              <span className={styles.badge}>Premium</span>
              <img src={p.img_url} alt={p.title} className={styles.cover} loading="lazy" />
              <div className={styles.body}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className={styles.price}>₹{p.price_inr}</p>
                <motion.button
                  type="button" className={styles.buyBtn}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
                  onClick={() => openBuy(p)}
                >
                  Buy — ₹{p.price_inr}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreBooks && (
          <div className={styles.showMoreWrap}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/recipes#premium-books" className={styles.showMoreBtn}>
                Show more
              </Link>
            </motion.div>
          </div>
        )}
      </section>

      {modals}
    </>
  );
}
