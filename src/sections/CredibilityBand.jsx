import FadeUp from '../components/FadeUp';
import { PRESS_ITEMS, PRESS_LINKS, BRAND_ASSOCIATIONS } from '../data/content';
import styles from './CredibilityBand.module.css';

export default function CredibilityBand() {
  return (
    <section className={styles.section}>
      {/* Stats */}
      <FadeUp>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>600K+</span>
            <span className={styles.statLabel}>Community members</span>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Years experience</span>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>1-on-1</span>
            <span className={styles.statLabel}>Personalised consulting</span>
          </div>
        </div>
      </FadeUp>

      {/* Brand associations */}
      <FadeUp delay={0.1}>
        <div className={styles.group}>
          <span className={`eyebrow ${styles.groupLabel}`}>Brand Associations</span>
          <div className={styles.logoRow}>
            {BRAND_ASSOCIATIONS.map((brand) => (
              <div key={brand.name} className={styles.logoSlot}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={styles.brandLogo}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <span className={styles.logoPlaceholder} style={{ display: 'none' }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Press */}
      <FadeUp delay={0.2}>
        <div className={`${styles.group} ${styles.pressGroup}`}>
          <span className={`eyebrow ${styles.groupLabel}`}>As Seen In</span>
          <div className={styles.logoRow}>
            {PRESS_ITEMS.map((item) => (
              <a
                key={item.name}
                href={PRESS_LINKS[item.name] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pressItem}
                title={item.name}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className={styles.pressLogo}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'inline';
                  }}
                />
                <span className={styles.pressName}>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
