import { Link } from 'react-router-dom';
import { REELS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './ReelsSlider.module.css';

function PlayIcon() {
  return (
    <svg className={styles.playIcon} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="rgba(56,24,72,0.55)" />
      <path d="M19 14l18 10-18 10V14z" fill="white" />
    </svg>
  );
}

export default function ReelsSlider() {
  return (
    <section className={styles.section}>
      <FadeUp>
        <div className="section-header">
          <span className="eyebrow">Recipes in Motion</span>
          <h2>Cook along with Arjita</h2>
        </div>
      </FadeUp>

      <div className={styles.sliderWrap}>
        <div className={styles.track}>
          {REELS.map((reel) => (
            <Link
              key={reel.slug}
              to={`/recipes/${reel.slug}`}
              className={styles.reel}
              aria-label={`Watch ${reel.title}`}
            >
              <div className={styles.thumb}>
                <img
                  src={reel.thumb}
                  alt={reel.title}
                  className={styles.thumbImg}
                  loading="lazy"
                />
                <PlayIcon />
              </div>
              <p className={styles.title}>{reel.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <FadeUp delay={0.1}>
        <div className="section-cta">
          <Link to="/recipes" className="btn-outline">
            Explore all recipes
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
