import { motion } from 'framer-motion';
import { CALENDLY, WA_NUTRITION } from '../data/content';
import {
  INCLUDED_IN_ALL_PLANS,
  ONE_TIME_CONSULTATION,
  PLAN_COMPARISON,
  PLAN_TYPES,
} from '../data/planComparison';

import FadeUp from '../components/FadeUp';
import ClosingCTA from '../sections/ClosingCTA';
import Testimonials from '../sections/Testimonials';
import PageMeta from '../components/PageMeta';

import arjita from '../assets/arjita.png';
import sampoornaPlanImg from '../assets/Sampoorna Individual.png';
import sahayogaPlanImg from '../assets/Sahayoga Couple.png';
import srijanPlanImg from '../assets/Srijan One Time.png';

import styles from './NutritionPlans.module.css';

export default function NutritionPlans() {
  const planImages = {
    sampoorna: sampoornaPlanImg,
    sahayoga: sahayogaPlanImg,
    srijan: srijanPlanImg,
  };

  return (
    <>
      <PageMeta
        title="Nutrition Plans — Online Dietitian India | WeNourish"
        description="Compare WeNourish consultation plans for individuals and couples. Personalised diet plans, health logs, progress calls and ongoing support."
      />

      <section className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Nutrition plans</span>

          <h1>Choose the support that fits your health journey</h1>

          <p className={styles.heroSub}>
            Compare one-time consultation, individual coaching and couple
            coaching in one clear place before you book your free call.
          </p>

          <div className={styles.heroActions}>
            <motion.a
              href={CALENDLY}
              target="_blank"
              rel="noopener"
              className="btn-primary lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Call
            </motion.a>

            <a
              href={WA_NUTRITION}
              target="_blank"
              rel="noopener"
              className="btn-outline"
            >
              Message on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroPhoto}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
        >
          <div className={styles.heroBlob} />
          <img
            src={arjita}
            alt="Arjita from WeNourish"
            className={styles.photo}
          />
        </motion.div>
      </section>

      <section className={`section-paper ${styles.plans}`}>
        <FadeUp className={styles.consultIntro}>
          <span className="eyebrow">How it works</span>

          <h2>1-on-1 nutrition consulting, made easy to compare</h2>

          <p>
            The plans include personalised diet planning, health-log based
            monitoring, chat support, progress calls with Arjita and blood
            report analysis. The longer the plan, the more review calls and
            report checks are included.
          </p>
        </FadeUp>

        <FadeUp className={styles.choosePlanHead}>
          <span className="eyebrow">Choose your plan</span>

          <h2>Start with the plan that fits you best</h2>

          <p>
            Pick a one-time consultation, individual coaching, or a couple plan.
            Every monitored plan includes personalised guidance, health logs and
            support from Arjita.
          </p>
        </FadeUp>

        <div className={styles.planTypeGridAlt}>
          {PLAN_TYPES.map((plan, index) => (
            <motion.article
              key={plan.id}
              className={styles.planCardAlt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.planImageWrap}>
                <img
                  src={planImages[plan.id]}
                  alt={`${plan.name} ${plan.title}`}
                  className={styles.planImage}
                />
              </div>

              <div className={styles.planStep}>{plan.step}</div>

              <div className={styles.planCardBody}>
                <h3 className={styles.planCardTitle}>
                  {plan.name} – {plan.title}
                </h3>

                <ul className={styles.planFeatureList}>
                  {plan.includes.map((item) => (
                    <li key={item}>
                     <span className={styles.planCheck}>✓</span>
                    <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_NUTRITION}
                  target="_blank"
                  rel="noopener"
                  className={styles.planWhatsappBtn}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}

          <motion.article
            className={`${styles.planCardAlt} ${styles.planCardAltSingle}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.planImageWrap}>
              <img
                src={planImages.srijan}
                alt="Srijan One Time Consultation"
                className={styles.planImage}
              />
            </div>

            <div className={styles.planStep}>{ONE_TIME_CONSULTATION.step}</div>

            <div className={styles.planCardBody}>
              <h3 className={styles.planCardTitle}>
                {ONE_TIME_CONSULTATION.name} –{' '}
                {ONE_TIME_CONSULTATION.title}
              </h3>

             <ul className={styles.planFeatureList}>
  {ONE_TIME_CONSULTATION.includes.map((item) => (
    <li key={item}>
      <span className={styles.planCheck}>✓</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

              <a
                href={WA_NUTRITION}
                target="_blank"
                rel="noopener"
                className={styles.planWhatsappBtn}
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.article>
        </div>

        <FadeUp className={styles.compareBlock}>
          <div className={styles.compareHeader}>
            <div>
              <span className="eyebrow">Compare plans</span>
              <h2>Sampoorna vs Sahayoga by duration</h2>
            </div>

            <p>
              Use this table where the visitor wants to understand pricing,
              duration and plan value before booking.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Sampoorna individual</th>
                  <th>Sahayoga couple</th>
                  <th>Progress calls</th>
                  <th>Blood report analysis</th>
                </tr>
              </thead>

              <tbody>
                {PLAN_COMPARISON.map((row) => (
                  <tr key={row.duration}>
                    <td data-label="Duration">{row.duration}</td>
                    <td data-label="Sampoorna individual">{row.sampoorna}</td>
                    <td data-label="Sahayoga couple">{row.sahayoga}</td>
                    <td data-label="Progress calls">{row.calls}</td>
                    <td data-label="Blood report analysis">
                      {row.bloodReports}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp className={styles.includedBlock}>
          <div>
            <span className="eyebrow">Included</span>
            <h2>Every monitored plan includes</h2>
          </div>

          <ul className={styles.includedGrid}>
            {INCLUDED_IN_ALL_PLANS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeUp>

       <FadeUp className={styles.oneTimeBlock}>
  <div className={styles.oneTimeContent}>
    <span className="eyebrow">One time consultation</span>
    <h2>{ONE_TIME_CONSULTATION.price}</h2>

    <p>{ONE_TIME_CONSULTATION.bestFor}</p>
  </div>

  <ul>
    {ONE_TIME_CONSULTATION.includes.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
</FadeUp>
      </section>

      <Testimonials />
      <ClosingCTA />
    </>
  );
}
