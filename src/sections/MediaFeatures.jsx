import { PRESS, PRESS_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './MediaFeatures.module.css';

const doubled = [...PRESS, ...PRESS];

export default function MediaFeatures() {
  return (
    <section className={styles.section}>
      <FadeUp><span className="eyebrow" style={{ textAlign: 'center', marginBottom: 24 }}>AS SEEN IN</span></FadeUp>
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((p, i) => (
            <a
              key={i}
              href={PRESS_LINKS[p] || '#'}
              target="_blank"
              rel="noopener"
              className={styles.item}
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
