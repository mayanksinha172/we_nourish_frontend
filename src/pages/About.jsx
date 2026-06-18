import { motion } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import ClosingCTA from '../sections/ClosingCTA';
import PageMeta from '../components/PageMeta';
import arjita from '../assets/arjita.png';
import styles from './About.module.css';

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arjita',
  jobTitle: 'Nutritionist',
  url: 'https://wenourish.in',
  description: 'Registered nutritionist with 10+ years of experience. Founder of WeNourish.',
  worksFor: { '@type': 'Organization', name: 'WeNourish' },
};

const STATS = [
  { num: '600K+', label: 'Community members' },
  { num: '10+',   label: 'Years of experience' },
  { num: '5000+', label: 'Clients coached' },
  { num: '4',     label: 'Published recipe books' },
];

const VALUES = [
  {
    title: 'Food is not the enemy',
    body: 'No morality around food. No guilt trips. Only an understanding of what your body truly needs to thrive.',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
    alt: 'Colourful wholesome meal spread',
  },
  {
    title: 'Evidence, not trends',
    body: 'Every recommendation is rooted in current nutrition science — not viral headlines or fleeting diet fads.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    alt: 'Balanced nutrition bowl with fresh ingredients',
  },
  {
    title: 'Practical above perfect',
    body: 'Real life is messy. Plans should flex around weddings, travel, stress and celebrations — not the other way around.',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    alt: 'Simple everyday breakfast on a kitchen table',
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Arjita — WeNourish Nutritionist"
        description="Meet Arjita, registered nutritionist with 10+ years experience, 600K+ community, and founder of WeNourish."
        schema={ABOUT_SCHEMA}
      />
      {/* Story */}
      <section className={styles.story}>
        <motion.div
          className={styles.storyPhoto}
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .65, ease: [.22,1,.36,1] }}
        >
          <div className={styles.blob} />
          <img src={arjita} alt="Arjita" className={styles.photo} />
        </motion.div>
        <motion.div
          className={styles.storyText}
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .65, ease: [.22,1,.36,1], delay: .12 }}
        >
          <span className="eyebrow">THE STORY</span>
          <h1>Hi, I'm Arjita</h1>
          <p>I'm a registered nutritionist with over a decade of experience helping people find a sustainable, joyful relationship with food. My own journey started when I realised that most "diet advice" online was making people's lives worse, not better.</p>
          <p>WeNourish was born from a simple belief: nourishment should feel good. Not punishing. Not complicated. When you eat in a way that genuinely supports your body, everything else falls into place — your energy, your mood, your confidence.</p>
          <p>I've worked with clients across India and internationally — from athletes and new mothers to professionals managing PCOS, thyroid conditions, and gut issues. Whatever your starting point, we build from where you are.</p>
          <span className="editorial" style={{ fontSize: 22, display: 'block', marginTop: 20 }}>— Arjita, Founder & Lead Nutritionist</span>
        </motion.div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.label} className={styles.stat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, ease: [.22,1,.36,1], delay: i * .08 }}
          >
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <FadeUp className="section-header">
          <span className="eyebrow">OUR MISSION</span>
          <h2>Nourishment without noise</h2>
          <p style={{ maxWidth: 560, margin: '16px auto 0', color: 'rgba(255,255,255,.75)' }}>
            To make evidence-based nutrition accessible, personal and kind — so that every person can eat in a way that truly supports their life.
          </p>
        </FadeUp>
      </section>

      {/* Values */}
      <section className={`section-paper ${styles.values}`}>
        <FadeUp className="section-header">
          <span className="eyebrow">WHAT WE STAND FOR</span>
          <h2>Our approach to food and health</h2>
        </FadeUp>
        <div className={styles.valuesGrid}>
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title} className={styles.valueCard}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.valueImgWrap}>
                <img src={v.img} alt={v.alt} className={styles.valueImg} loading="lazy" />
              </div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
