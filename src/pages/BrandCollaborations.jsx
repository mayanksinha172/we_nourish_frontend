import { motion } from 'framer-motion';
import { WA_COLLAB } from '../data/content';
import FadeUp from '../components/FadeUp';
import PageMeta from '../components/PageMeta';
import styles from './BrandCollaborations.module.css';

const COLLAB_TYPES = [
  { icon: 'fa-bullhorn',       title: 'Sponsored Content',       body: 'Authentic recipe development and content creation featuring your product, published to a 600K+ engaged community.' },
  { icon: 'fa-video',          title: 'Video & Reel Integration', body: 'Product integrations within recipe reels and long-form videos across Instagram and YouTube.' },
  { icon: 'fa-handshake',      title: 'Brand Ambassadorship',    body: 'Long-term partnership to represent your brand across multiple formats and platforms over a sustained period.' },
  { icon: 'fa-book-open',      title: 'Recipe Development',      body: 'Custom recipe creation using your products for use on your own channels, website, or packaging.' },
];

export default function BrandCollaborations() {
  return (
    <>
      <PageMeta
        title="Brand Collaborations — WeNourish"
        description="Partner with Arjita at WeNourish. Reach 600K+ engaged followers across Instagram and YouTube. Enquire via WhatsApp."
      />
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
        >
          <span className="eyebrow" style={{ color: 'var(--green-tint)' }}>WORK WITH ARJITA</span>
          <h1>Brand Collaborations</h1>
          <p className={styles.heroSub}>
            Partnering with brands that share a commitment to real food, honest nutrition, and a
            healthier India. Reach a highly engaged community of 600K+ across Instagram and YouTube.
          </p>
          <motion.a
            href={WA_COLLAB}
            target="_blank"
            rel="noopener"
            className="btn-primary lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: .97 }}
          >
            <i className="fa-brands fa-whatsapp" style={{ marginRight: 8 }} />
            Start a Conversation
          </motion.a>
        </motion.div>
      </section>

      <section className={`section-paper ${styles.types}`}>
        <FadeUp className="section-header">
          <span className="eyebrow">HOW WE CAN WORK TOGETHER</span>
          <h2>Collaboration formats</h2>
        </FadeUp>
        <div className={styles.grid}>
          {COLLAB_TYPES.map((c, i) => (
            <motion.div
              key={c.title}
              className={styles.card}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, ease: [.22, 1, .36, 1], delay: i * .1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.icon}><i className={`fa-solid ${c.icon}`} /></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`section-plum ${styles.cta}`}>
        <FadeUp>
          <h2 style={{ color: 'white' }}>Interested in collaborating?</h2>
          <p style={{ color: 'rgba(255,255,255,.8)', maxWidth: 480, margin: '12px auto 28px' }}>
            Drop a message on WhatsApp with a brief about your brand and what you have in mind.
            We respond to every inquiry personally.
          </p>
          <motion.a
            href={WA_COLLAB}
            target="_blank"
            rel="noopener"
            className="btn-primary lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: .97 }}
          >
            <i className="fa-brands fa-whatsapp" style={{ marginRight: 8 }} />
            Message for Brand Collaboration
          </motion.a>
        </FadeUp>
      </section>
    </>
  );
}
