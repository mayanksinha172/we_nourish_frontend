import { BRAND_ASSOCIATIONS, PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './CredibilityBand.module.css';

/* Repeat within each half so the track fills wide screens; two identical groups = seamless -50% loop */
const PRESS_GROUP_REPEAT = 4;
const pressGroupItems = Array.from({ length: PRESS_GROUP_REPEAT }, () => PRESS_ITEMS).flat();

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

function PressMarqueeItem({ item }) {
  return (
    <a
      href={PRESS_LINKS[item.name] || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pressItem}
    >
      <img
        src={item.logo}
        alt={`${item.name} logo`}
        className={styles.pressLogo}
        loading="eager"
        decoding="async"
        draggable="false"
      />
      <span>{item.name}</span>
    </a>
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

      <div className={`${styles.track} ${styles.pressTrack}`}>
        <div className={`${styles.inner} ${styles.pressInner}`}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className={styles.marqueeGroup}
              aria-hidden={group === 1 ? true : undefined}
            >
              {pressGroupItems.map((item, i) => (
                <PressMarqueeItem key={`${group}-${item.name}-${i}`} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
