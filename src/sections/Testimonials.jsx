import { useRef } from 'react';
import { TESTIMONIALS } from '../data/content';
import styles from './Testimonials.module.css';

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function StarRow() {
  return (
    <div className={styles.stars} aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={styles.star} aria-hidden="true">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
    <div className={styles.card}>
      <StarRow />
      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{initials(t.name)}</div>
        <div className={styles.authorInfo}>
          <span className={styles.name}>{t.displayName || t.name}</span>
          {t.outcome && <span className={styles.outcome}>{t.outcome}</span>}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Split reviews across two rows
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const row1 = TESTIMONIALS.slice(0, half);
  const row2 = TESTIMONIALS.slice(half);

  const pause  = (ref) => { if (ref.current) ref.current.style.animationPlayState = 'paused'; };
  const resume = (ref) => { if (ref.current) ref.current.style.animationPlayState = 'running'; };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className="eyebrow">Testimonials</span>
        <h2>What our clients say</h2>
        <p className={styles.sub}>Real stories from real people who transformed their health with WeNourish.</p>
      </div>

      <div className={styles.marqueeWrap}>
        {/* Fade edges */}
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        {/* Row 1 — scrolls left */}
        <div
          className={styles.row}
          onMouseEnter={() => pause(row1Ref)}
          onMouseLeave={() => resume(row1Ref)}
        >
          <div className={`${styles.track} ${styles.trackLeft}`} ref={row1Ref}>
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className={styles.row}
          onMouseEnter={() => pause(row2Ref)}
          onMouseLeave={() => resume(row2Ref)}
        >
          <div className={`${styles.track} ${styles.trackRight}`} ref={row2Ref}>
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.veggieWrap}>
        <img src="/testimonials-bg.png" alt="" loading="lazy" />
      </div>
    </section>
  );
}
