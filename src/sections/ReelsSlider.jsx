import { useState, useRef, useEffect } from 'react';
import { REELS, SOCIAL_LINKS } from '../data/content';
import FadeUp from '../components/FadeUp';
import styles from './ReelsSlider.module.css';

const PAGE_SIZE = 4;

function ReelCard({ reel, onOpen, shouldPause, onHover }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPause) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [shouldPause]);

  return (
    <button
      className={styles.card}
      onClick={() => onOpen(reel)}
      onMouseEnter={onHover}
      onFocus={onHover}
      aria-label={`View recipe for ${reel.caption}`}
    >
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={reel.src}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75; }}
        />
        <div className={styles.videoFooter}>
          <span className={styles.cardTag}>{reel.tag}</span>
          <span className={styles.viewRecipe}>View Recipe</span>
        </div>
      </div>
      <p className={styles.caption}>{reel.caption}</p>
    </button>
  );
}

function RecipeModal({ reel, onClose }) {
  const r = reel.recipe;
  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={r.title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close recipe">
          <i className="fa-solid fa-xmark" />
        </button>

        <div className={styles.modalInner}>
          <span className={`eyebrow ${styles.modalTag}`}>{reel.tag}</span>
          <h2 className={styles.modalTitle}>{r.title}</h2>

          <div className={styles.metaRow}>
            <span><i className="fa-regular fa-clock" /> {r.time}</span>
            <span><i className="fa-solid fa-utensils" /> {r.servings}</span>
            {r.macros && (
              <>
                <span><i className="fa-solid fa-fire" /> {r.macros.kcal}</span>
                <span><i className="fa-solid fa-drumstick-bite" /> {r.macros.protein}</span>
              </>
            )}
          </div>

          <p className={styles.intro}>{r.intro}</p>

          <h3 className={styles.sectionHeading}>Ingredients</h3>
          <ul className={styles.ingredientList}>
            {r.ingredients.map((ing, i) => (
              <li key={i} className={ing === '' ? styles.ingredientSpacer : ''}>{ing}</li>
            ))}
          </ul>

          <h3 className={styles.sectionHeading}>Method</h3>
          <ol className={styles.stepList}>
            {r.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          {r.tip && (
            <div className={styles.tip}>
              <i className="fa-solid fa-lightbulb" />
              <p>{r.tip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReelsSlider() {
  const [page, setPage] = useState(0);
  const [activeReel, setActiveReel] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const totalPages = Math.ceil(REELS.length / PAGE_SIZE);
  const visible = REELS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className={styles.section}>
      <FadeUp>
        <div className={styles.header}>
          <span className="eyebrow">Follow Along</span>
          <h2>See it in action</h2>
          <p className={styles.sub}>
            Tap any video to get the full recipe. Follow{' '}
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.igLink}>
              @we_nourish
            </a>{' '}
            on Instagram for more.
          </p>
        </div>
      </FadeUp>

      <div className={styles.sliderWrapper}>
        <button
          className={styles.arrow}
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          aria-label="Previous videos"
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className={styles.track}
          onMouseLeave={() => setHoveredId(null)}
        >
          {visible.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onOpen={setActiveReel}
              shouldPause={hoveredId !== null && hoveredId !== reel.id}
              onHover={() => setHoveredId(reel.id)}
            />
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={() => setPage((p) => p + 1)}
          disabled={page >= totalPages - 1}
          aria-label="Next videos"
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>

      <FadeUp>
        <div className={styles.cta}>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.followBtn}>
            <i className="fa-brands fa-instagram" /> Follow on Instagram
          </a>
        </div>
      </FadeUp>

      {activeReel && <RecipeModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </section>
  );
}
