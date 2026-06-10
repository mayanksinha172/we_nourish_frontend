import { motion } from 'framer-motion';
import { CALENDLY, NUTRITION_PLANS } from '../data/content';
import FadeUp from '../components/FadeUp';
import ClosingCTA from '../sections/ClosingCTA';
import Testimonials from '../sections/Testimonials';
import PageMeta from '../components/PageMeta';
import arjita from '../assets/arjita.jpg';
import styles from './NutritionPlans.module.css';

export default function NutritionPlans() {
  return (
    <>
      <PageMeta
        title="Nutrition Plans — Online Dietitian India | WeNourish"
        description="1-on-1 nutrition consulting plans for weight loss, PCOS, and performance. Personalised, evidence-based. Book a free call."
      />
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

      {/* Plans */}
      <section className={`section-paper ${styles.plans}`}>
        <FadeUp className={styles.consultIntro}>
          <h2>How 1-on-1 nutrition consulting works</h2>
          <p>
            Start with a free consultation to discuss your goals. Arjita and her team then create
            a personalised diet plan with regular check-ins and ongoing WhatsApp support.
            Clients see measurable results in weight, energy, PCOS symptoms and overall wellness.
          </p>
        </FadeUp>
        <FadeUp className="section-header">
          <span className="eyebrow">PLANS</span>
          <h2>Choose the right level of support</h2>
        </FadeUp>
        <div className={styles.planGrid}>
          {NUTRITION_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={styles.planCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, ease: [.22,1,.36,1], delay: i * .1 }}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(56,24,72,.1)' }}
            >
              <img src={plan.image} alt={plan.title} className={styles.planImg} loading="lazy" />
              <h3>{plan.title}</h3>
              <p className={styles.duration}>{plan.duration} — {plan.subtitle}</p>
              <p className={styles.planDesc}>{plan.description}</p>
              <ul className={styles.includes}>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <motion.a
                href={CALENDLY}
                target="_blank"
                rel="noopener"
                className={`btn-primary ${styles.planBtn}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: .97 }}
              >
                Book a call to discuss
              </motion.a>
            </motion.div>
          ))}
        </div>
        <FadeUp><p className={styles.note}>Prices shared on the free call. International clients welcome.</p></FadeUp>
      </section>

      <Testimonials />

      <ClosingCTA />
    </>
  );
}
