import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <>
      <section className={styles.banner}>
        <p className={styles.bannerTitle}>THE WENOURISH BLOG</p>
      </section>

      <section className={styles.intro}>
        <FadeUp className={styles.introInner}>
          <h1>Nourishment, explained</h1>
          <p className={styles.heroSub}>Practical nutrition advice, recipe inspiration, and the science behind what you eat — without the jargon.</p>
        </FadeUp>
      </section>

      <section className={`section-paper ${styles.grid_section}`}>
        <div className={styles.grid}>
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              className={styles.card}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
              whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(56,24,72,.1)' }}
            >
              <div className={styles.img} style={{ backgroundImage: `url(${post.img})` }}>
                <span className={styles.tag}>{post.tag}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.date}>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.read}>Read article →</span>
              </div>
            </motion.article>
          ))}
        </div>

        <FadeUp delay={.2}>
          <div className={styles.more}>
            <p style={{ color: 'var(--muted-plum)', marginBottom: 16 }}>More articles coming soon. Subscribe to get them first.</p>
            <form className={styles.form} onSubmit={e => { e.preventDefault(); e.target.reset(); }}>
              <input type="email" placeholder="your@email.com" required className={styles.input} />
              <button type="submit" className="btn-primary">Notify me</button>
            </form>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
