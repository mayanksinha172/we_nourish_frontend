import { useState } from 'react';
import { NUTRITION_PLANS, PLATE_IMAGE, CALENDLY } from '../data/content';
import Logo from '../components/Logo';
import styles from './RotatingPlateSection.module.css';

export default function RotatingPlateSection() {
  const [active, setActive] = useState(0);
  const plan = NUTRITION_PLANS[active];

  return (
    <section className={`section-fullbleed ${styles.block}`}>
      <div className={styles.plateWrap}>
        <div className={styles.plateInner}>
          <img
            className={styles.plateImg}
            src={PLATE_IMAGE}
            alt="Healthy meal plate"
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.greenPanel}>
        <div className={styles.card}>
          <div className={styles.logoWrap}>
            <Logo variant="center" asLink={false} />
          </div>
          <h2 className={styles.heading}>Choose your Plan</h2>

          <div className={styles.tabs}>
            {NUTRITION_PLANS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                {p.title}
              </button>
            ))}
          </div>

          <div className={styles.mealPlan}>
            <div className={styles.mealImgWrap}>
              <img src={plan.image} alt={plan.title} className={styles.mealImg} loading="lazy" />
            </div>
            <div className={styles.mealText}>
              <h3>{plan.title}</h3>
              <p className={styles.kcal}>{plan.kcal}</p>
              <p className={styles.desc}>{plan.description}</p>
              <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
