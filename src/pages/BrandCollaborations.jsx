import { motion } from 'framer-motion';
import { WA_COLLAB } from '../data/content';
import FadeUp from '../components/FadeUp';
import PageMeta from '../components/PageMeta';
import styles from './BrandCollaborations.module.css';

function IconSponsored() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4h2l4 3V7L6 10H4z" fill="currentColor" />
      <path d="M16 8a4 4 0 0 1 0 8M18 6a7 7 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M17 10l4-2v8l-4-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconAmbassador() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l2.2 4.5 5 .7-3.6 3.5.9 5L12 13.8 7.5 15.7l.9-5L4.8 7.2l5-.7L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconRecipe() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h12a2 2 0 0 1 2 2v14H4V6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const COLLAB_TYPES = [
  {
    Icon: IconSponsored,
    title: 'Sponsored Content',
    body: 'Authentic recipe development and content creation featuring your product, published to a 600K+ engaged community.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
  {
    Icon: IconVideo,
    title: 'Video & Reel Integration',
    body: 'Product integrations within recipe reels and long-form videos across Instagram and YouTube.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
  },
  {
    Icon: IconAmbassador,
    title: 'Brand Ambassadorship',
    body: 'Long-term partnership to represent your brand across multiple formats and platforms over a sustained period.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    Icon: IconRecipe,
    title: 'Recipe Development',
    body: 'Custom recipe creation using your products for use on your own channels, website, or packaging.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
  },
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
              <div className={styles.cardVisual}>
                <img src={c.image} alt="" className={styles.cardImage} loading="lazy" aria-hidden="true" />
                <div className={styles.icon}>
                  <c.Icon />
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
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
