import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/content';
import FadeUp from '../components/FadeUp';
import PageMeta from '../components/PageMeta';
import styles from './Blog.module.css';

function getBlogListSeo(category) {
  const label = BLOG_CATEGORIES.find((c) => c.id === category)?.label;

  if (category === 'all') {
    return {
      title: 'Nutrition Blog — PCOS, Thyroid & Weight Loss | WeNourish India',
      description:
        'Expert nutrition articles from a nutritionist in India. PCOS nutritionist India, thyroid diet plans, weight loss guides, gut health, diabetes and hormonal health advice.',
    };
  }

  const keywordMap = {
    pcos: 'PCOS nutritionist India',
    thyroid: 'Thyroid diet plan India',
    'weight-loss': 'Weight loss nutritionist India',
    'gut-health': 'Gut health nutritionist India',
    diabetes: 'Diabetes nutritionist India',
    'hormonal-health': 'Hormonal health nutritionist India',
  };

  return {
    title: `${label} Nutrition Articles — Nutritionist India | WeNourish`,
    description: `${keywordMap[category] || `${label} nutrition`} — evidence-based articles, meal tips and recipe ideas from clinical nutritionist Arjita at WeNourish.`,
  };
}

export default function Blog() {
  const [category, setCategory] = useState('all');
  const seo = getBlogListSeo(category);

  const filtered = useMemo(
    () => BLOG_POSTS.filter((post) => category === 'all' || post.category === category),
    [category],
  );

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} />
      <section className={styles.banner}>
        <p className={styles.bannerTitle}>THE WENOURISH BLOG</p>
      </section>

      <section className={styles.intro}>
        <FadeUp className={styles.introInner}>
          <h1>Nourishment, explained</h1>
          <p className={styles.heroSub}>
            Practical nutrition advice organised by health focus — PCOS, thyroid, weight loss,
            gut health, diabetes and hormonal health.
          </p>
        </FadeUp>
      </section>

      <div className={styles.filterBar}>
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`${styles.chip} ${category === cat.id ? styles.chipActive : ''}`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <section className={`section-paper ${styles.grid_section}`}>
        <div className={styles.grid}>
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, ease: [.22, 1, .36, 1], delay: i * .1 }}
              whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(56,24,72,.1)' }}
            >
              <Link to={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.img} style={{ backgroundImage: `url(${post.img})` }}>
                  <span className={styles.tag}>{post.tag}</span>
                </div>
                <div className={styles.body}>
                  <span className={styles.date}>{post.date} · {post.readTime}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={styles.read}>Read article →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No articles in this category yet. Check back soon.</p>
        )}

        <FadeUp delay={.2}>
          <div className={styles.more}>
            <p style={{ color: 'var(--muted-plum)', marginBottom: 16 }}>
              More articles coming soon. Subscribe to get them first.
            </p>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); e.target.reset(); }}>
              <input type="email" placeholder="your@email.com" required className={styles.input} />
              <button type="submit" className="btn-primary">Notify me</button>
            </form>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
