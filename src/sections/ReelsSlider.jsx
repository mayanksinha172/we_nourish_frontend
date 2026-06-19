import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      aria-label={`Options for ${reel.caption}`}
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
          <span className={styles.viewHint}>Tap for options</span>
        </div>
      </div>
      <p className={styles.caption}>{reel.caption}</p>
    </button>
  );
}

function ActionSheet({ reel, onClose }) {
  return (
    <div className={styles.sheetOverlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <p className={styles.sheetCaption}>{reel.caption}</p>

        <a
          href={reel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sheetBtn}
          onClick={onClose}
        >
          <i className="fa-brands fa-instagram" />
          View on Instagram
        </a>

        <Link
          to={`/recipes/${reel.recipeSlug}`}
          className={`${styles.sheetBtn} ${styles.sheetBtnPrimary}`}
          onClick={onClose}
        >
          <i className="fa-solid fa-book-open" />
          View Recipe
        </Link>

        <button className={styles.sheetCancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function ReelsSlider() {
  const [page, setPage] = useState(0);
  const [actionReel, setActionReel] = useState(null);
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
            Tap any video for the recipe or to watch on Instagram. Follow{' '}
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.igLink}>
              @we_nourish
            </a>{' '}
            for more.
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

        <div className={styles.track} onMouseLeave={() => setHoveredId(null)}>
          {visible.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onOpen={setActionReel}
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

      {actionReel && <ActionSheet reel={actionReel} onClose={() => setActionReel(null)} />}
    </section>
  );
}
