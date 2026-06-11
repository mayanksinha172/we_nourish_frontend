import { PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './MediaFeatures.module.css';

/* Repeat enough times so the track always fills wide screens, then duplicate for seamless -50% loop */
const HALF_REPEAT = 4;
const half = Array.from({ length: HALF_REPEAT }, () => PRESS_ITEMS).flat();
const marquee = [...half, ...half];

export default function MediaFeatures() {
  return (
    <section className={styles.section}>
      <FadeUp><span className="eyebrow" style={{ textAlign: 'center', marginBottom: 24 }}>AS SEEN IN</span></FadeUp>
      <div className={styles.track}>
        <div className={styles.inner} aria-hidden="false">
          {marquee.map((item, i) => (
            <a
              key={`${item.name}-${i}`}
              href={PRESS_LINKS[item.name] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
            >
              <img
                src={item.logo}
                alt=""
                className={styles.itemLogo}
                loading="lazy"
              />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
