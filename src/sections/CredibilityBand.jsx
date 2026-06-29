import { CREDIBILITY_STATS, BRAND_ASSOCIATIONS, PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './CredibilityBand.module.css';

const HALF_REPEAT = 4;
const half = Array.from({ length: HALF_REPEAT }, () => PRESS_ITEMS).flat();
const pressMarquee = [...half, ...half];

const BRAND_REPEAT = 2;
const brandHalf = Array.from({ length: BRAND_REPEAT }, () => BRAND_ASSOCIATIONS).flat();
const brandMarquee = [...brandHalf, ...brandHalf];

export default function CredibilityBand() {
  return (
    <section className={styles.section}>
      {/* Stats strip */}
      <FadeUp>
        <div className={styles.statsRow}>
          {CREDIBILITY_STATS.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statNum}>{stat.num}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </FadeUp>

      <div className={styles.divider} />

      {/* Brand Associations */}
      <FadeUp>
        <span className="eyebrow" style={{ textAlign: 'center', marginBottom: 20 }}>
          Brand Associations
        </span>
      </FadeUp>
      <div className={styles.track}>
        <div className={`${styles.inner} ${styles.brandInner}`}>
          {brandMarquee.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className={`${styles.pressItem} ${styles.brandItem}`}>
              {brand.logo && (
                <img
                  src={brand.logo}
                  alt=""
                  className={styles.brandLogo}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* As Seen In */}
      <FadeUp>
        <span className="eyebrow" style={{ textAlign: 'center', marginBottom: 20 }}>
          As Seen In
        </span>
      </FadeUp>
      <div className={styles.track}>
        <div className={styles.inner}>
          {pressMarquee.map((item, i) => (
            <a
              key={`${item.name}-${i}`}
              href={PRESS_LINKS[item.name] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pressItem}
            >
              <img src={item.logo} alt="" className={styles.pressLogo} loading="lazy" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
