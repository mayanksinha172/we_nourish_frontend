import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CALENDLY, WA_NUTRITION } from '../data/content';
import arjita from '../assets/arjita.png';
import styles from './Hero.module.css';

function LeafBranch({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 260" fill="currentColor" aria-hidden="true">
      <path d="M112 256 C 106 190, 104 120, 112 8" stroke="currentColor" strokeWidth="3.5" fill="none" />
      <ellipse cx="76"  cy="52"  rx="30" ry="11" transform="rotate(-38 76 52)" />
      <ellipse cx="148" cy="78"  rx="32" ry="12" transform="rotate(32 148 78)" />
      <ellipse cx="70"  cy="112" rx="33" ry="12" transform="rotate(-26 70 112)" />
      <ellipse cx="152" cy="140" rx="30" ry="11" transform="rotate(24 152 140)" />
      <ellipse cx="76"  cy="176" rx="29" ry="11" transform="rotate(-32 76 176)" />
      <ellipse cx="146" cy="200" rx="26" ry="10" transform="rotate(30 146 200)" />
      <ellipse cx="112" cy="22"  rx="24" ry="9"  transform="rotate(-86 112 22)" />
    </svg>
  );
}

/* Accepts optional videoSrc; falls back to poster image so adding a video later requires no rebuild */
function HeroMedia({ videoSrc, posterSrc, alt }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = useCallback(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  if (!videoSrc) {
    return (
      <img
        src={posterSrc}
        alt={alt}
        className={styles.photo}
      />
    );
  }

  return (
    <div className={styles.videoWrap} onClick={handleClick} role="button" aria-label={playing ? 'Pause video' : 'Play video'}>
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        loop
        muted
        playsInline
        className={styles.photo}
      />
      {!playing && (
        <div className={styles.playBtn} aria-hidden="true">
          <i className="fa-solid fa-play" />
        </div>
      )}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .12, delayChildren: .25 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, ease: [.22,1,.36,1] } },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grain}       aria-hidden="true" />
      <div className={styles.accentLine}  aria-hidden="true" />
      <LeafBranch className={styles.leafShadow} />
      <LeafBranch className={styles.leafShadowAlt} />

      {/* ── Left: text ── */}
      <motion.div className={styles.content} variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          Nutritionist · Wellness Expert · Author
        </motion.span>

        <motion.h1 className={styles.headline} variants={item}>
          Real food.<br />
          <em className="editorial">Real results.</em>
        </motion.h1>

        <motion.p className={styles.sub} variants={item}>
          Personalised nutrition consulting built on a decade of clinical experience —
          no deprivation, no crash diets, no guilt.
        </motion.p>

        <motion.div className={styles.btns} variants={item}>
          <motion.a
            href={CALENDLY} target="_blank" rel="noopener"
            className="btn-primary lg"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
          >
            Book Free Call
          </motion.a>
          <motion.a
            href={WA_NUTRITION} target="_blank" rel="noopener"
            className="btn-wa"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
          >
            <i className="fa-brands fa-whatsapp" /> Message on WhatsApp
          </motion.a>
        </motion.div>

        <motion.p className={styles.trustNote} variants={item}>
          <i className="fa-solid fa-shield-halved" aria-hidden="true" />
          Free 15-min call · zero commitment
        </motion.p>

        <motion.div className={styles.cred} variants={item}>
          <div className={styles.credCard}>
            <div className={styles.credRow}>
              <div className={styles.credStat}>
                <span className={styles.credNum}>600K+</span>
                <span className={styles.credLabel}>community</span>
              </div>
              <span className={styles.credDivider} aria-hidden="true" />
              <div className={styles.credStat}>
                <span className={styles.credNum}>10+</span>
                <span className={styles.credLabel}>years experience</span>
              </div>
            </div>
          </div>
          <p className={styles.pressText}>
            As seen in Indian Express, NDTV Food, India Today &amp; Slurrp
          </p>
        </motion.div>
      </motion.div>

      {/* ── Right: visual ── */}
      <motion.div
        className={styles.visualCol}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7, ease: [.22,1,.36,1], delay: .2 }}
      >
        <div className={styles.photoWrap}>
          <div className={styles.photoStack}>
            <div className={styles.photoFrame}>
              <HeroMedia
                posterSrc={arjita}
                videoSrc={null}
                alt="Arjita — WeNourish nutritionist"
              />
            </div>
            <p className={styles.caption}>Arjita — Guiding your journey to better health.</p>
          </div>
        </div>
      </motion.div>

      {/* Wave transition into next section */}
      <div className={styles.heroWave} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C200,100 500,20 720,50 C940,80 1200,20 1440,55 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.55)"
          />
          <path
            d="M0,78 C180,108 440,36 720,64 C1000,92 1260,34 1440,72 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
