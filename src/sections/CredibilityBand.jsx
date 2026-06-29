import { BRAND_ASSOCIATIONS, PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './CredibilityBand.module.css';

const HALF_REPEAT = 4;
const half = Array.from({ length: HALF_REPEAT }, () => PRESS_ITEMS).flat();
const pressMarquee = [...half, ...half];

function BrandMarqueeItem({ brand }) {
  return (
    <div className={`${styles.pressItem} ${styles.brandItem}`}>
      {brand.logo && (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className={styles.brandLogo}
          loading="eager"
          decoding="async"
          draggable="false"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      )}
      <span>{brand.name}</span>
    </div>
  );
}

export default function CredibilityBand() {
  return (
    <section className={styles.section}>
      {/* Brand Associations */}
      <FadeUp>
        <span className="eyebrow" style={{ textAlign: 'center', marginBottom: 20 }}>
          Brand Associations
        </span>
      </FadeUp>

      <div className={`${styles.track} ${styles.brandTrack}`}>
        <div className={`${styles.inner} ${styles.brandInner}`}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className={styles.marqueeGroup}
              aria-hidden={group === 1 ? true : undefined}
            >
              {BRAND_ASSOCIATIONS.map((brand) => (
                <BrandMarqueeItem key={`${group}-${brand.name}`} brand={brand} />
              ))}
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
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className={styles.pressLogo}
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
