import { PRESS } from '../data/content';
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
            <span key={i} className={styles.item}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
