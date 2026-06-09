import { motion } from 'framer-motion';
import { CALENDLY } from '../data/content';
import FadeUp from '../components/FadeUp';
import ClosingCTA from '../sections/ClosingCTA';
import arjita from '../assets/arjita.jpg';
import styles from './NutritionPlans.module.css';

const PROCESS = [
  { icon: 'fa-clipboard-list', title: 'Detailed intake',        body: 'A thorough assessment of your health history, food preferences, lifestyle and goals — no two clients start from the same point.' },
  { icon: 'fa-utensils',       title: 'Personalised diet plan', body: 'A practical, realistic plan built around what you actually eat and how you actually live — complete with meal ideas and portion guidance.' },
  { icon: 'fa-comments',       title: 'Weekly check-ins',       body: 'Regular follow-ups over WhatsApp and video call. We track, adjust and keep you accountable without pressure.' },
  { icon: 'fa-heart-pulse',    title: 'Ongoing support',        body: 'Questions between sessions? You have direct access — not a chatbot, not a portal, just a message away.' },
];

const PLANS = [
  {
    label: '4-WEEK KICKSTART', title: 'Get started and build momentum',
    features: ['Detailed initial assessment','Personalised 4-week diet plan','4 weekly check-in calls','WhatsApp support throughout','Mid-point plan adjustment'],
    accent: false,
  },
  {
    label: '3-MONTH TRANSFORMATION', title: 'Sustainable change at the deepest level',
    features: ['Everything in Kickstart','12 weekly check-in calls','Monthly full plan revisions','Recipe and grocery guidance','Lab result review (if available)','Priority WhatsApp access'],
    accent: true,
  },
];

export default function NutritionPlans() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6, ease: [.22,1,.36,1] }}
        >
          <span className="eyebrow">1-ON-1 NUTRITION CONSULTING</span>
          <h1>A plan built around you, not a template</h1>
          <p className={styles.heroSub}>No crash diets. No generic plans. Just evidence-based nutrition personalised to your body, lifestyle and goals.</p>
          <motion.a
            href={CALENDLY} target="_blank" rel="noopener"
            className="btn-primary lg"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
          >
            Book Free Call — no commitment
          </motion.a>
        </motion.div>
        <motion.div
          className={styles.heroPhoto}
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7, ease: [.22,1,.36,1], delay: .15 }}
        >
          <div className={styles.heroBlob} />
          <img src={arjita} alt="Arjita" className={styles.photo} />
        </motion.div>
      </section>

      {/* Process */}
      <section className={`section-paper ${styles.process}`}>
        <FadeUp className="section-header">
          <span className="eyebrow">WHAT YOU GET</span>
          <h2>How 1-on-1 consulting works</h2>
        </FadeUp>
        <div className={styles.processGrid}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.title} className={styles.processCard}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(56,24,72,.1)' }}
            >
              <div className={styles.icon}><i className={`fa-solid ${p.icon}`} /></div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className={`section-stone ${styles.plans}`}>
        <FadeUp className="section-header">
          <span className="eyebrow">PLANS</span>
          <h2>Choose the right level of support</h2>
        </FadeUp>
        <div className={styles.planGrid}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.label}
              className={`${styles.planCard} ${plan.accent ? styles.planAccent : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .12 }}
              whileHover={{ y: -6 }}
            >
              <span className="eyebrow" style={{ color: plan.accent ? 'var(--green-tint)' : undefined }}>{plan.label}</span>
              <h3 style={{ color: plan.accent ? 'white' : undefined, margin: '10px 0 20px' }}>{plan.title}</h3>
              <ul className={styles.features}>
                {plan.features.map(f => (
                  <li key={f} style={{ color: plan.accent ? 'rgba(255,255,255,.85)' : undefined }}>
                    <i className="fa-solid fa-leaf" style={{ color: plan.accent ? 'var(--green-tint)' : 'var(--green)', fontSize: 12 }} /> {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href={CALENDLY} target="_blank" rel="noopener"
                className={plan.accent ? 'btn-outline-white' : 'btn-primary'}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
              >
                Book a free call to discuss
              </motion.a>
            </motion.div>
          ))}
        </div>
        <FadeUp><p className={styles.note}>Prices shared on the free call. International clients welcome.</p></FadeUp>
      </section>

      <ClosingCTA />
    </>
  );
}
