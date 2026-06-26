import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { WA_NUTRITION, WA_COLLAB, PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import heroBg from '../assets/arjita-hero-wide.png';
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

function PressDropdown({ item }) {
  const chipRef    = useRef(null);
  const closeTimer = useRef(null);
  const [open, setOpen] = useState(false);
  const [pos,  setPos]  = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    if (!chipRef.current) return;
    const rect       = chipRef.current.getBoundingClientRect();
    const menuHeight = 190;
    const gap        = 10;
    let top = rect.bottom + gap;
    const maxTop = window.innerHeight - menuHeight - 8;
    if (top > maxTop) top = Math.max(rect.bottom + gap, maxTop);
    setPos({ top, left: rect.left + rect.width / 2 });
  }, []);

  const showMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    updatePosition();
    setOpen(true);
  }, [updatePosition]);

  const hideMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handler = () => updatePosition();
    window.addEventListener('scroll', handler, true);
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler, true);
      window.removeEventListener('resize', handler);
    };
  }, [open, updatePosition]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div
      className={styles.pressDropdown}
      onMouseEnter={showMenu} onMouseLeave={hideMenu}
      onFocus={showMenu}     onBlur={hideMenu}
    >
      <button
        ref={chipRef}
        type="button"
        className={`${styles.pressChip} ${open ? styles.pressChipActive : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${item.name} articles`}
      >
        <img src={item.logo} alt="" className={styles.pressLogo} loading="lazy" />
      </button>

      {open && createPortal(
        <div
          className={styles.pressMenuPortal}
          style={{ top: pos.top, left: pos.left }}
          role="menu"
          aria-label={`${item.name} articles`}
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          <div className={styles.pressMenuPanel}>
            <div className={styles.pressMenuHeader}>
              <span className={styles.pressMenuTitle}>{item.name}</span>
              <span className={styles.pressMenuSub}>Featured articles</span>
            </div>
            <div className={styles.pressMenuList}>
              {item.articles.map((article) => (
                <a
                  key={article.label}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pressMenuItem}
                  role="menuitem"
                >
                  <span>{article.label}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .11, delayChildren: .55 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, ease: [.22, 1, .36, 1] } },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Single full-bleed hero photo */}
      <div className={styles.heroBg}>
        <motion.img
          src={heroBg}
          alt="Arjita — WeNourish nutritionist"
          className={styles.heroBgImg}
          fetchPriority="high"
          decoding="sync"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: [.22, 1, .36, 1] }}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>

      {/* Depth layers — left side only */}
      <div className={styles.grain}       aria-hidden="true" />
      <div className={styles.accentLine}  aria-hidden="true" />
      <LeafBranch className={styles.leafShadow} />
      <LeafBranch className={styles.leafShadowAlt} />

      {/* ── Text overlay ── */}
      <div className={styles.heroInner}>
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
              href={WA_NUTRITION} target="_blank" rel="noopener"
              className="btn-primary lg"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
            >
              Book Free Call
            </motion.a>
            <motion.a
              href={WA_COLLAB} target="_blank" rel="noopener"
              className="btn-wa"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
            >
              <i className="fa-brands fa-whatsapp" /> Message on brand collaboration
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
            <div className={styles.pressBlock}>
              <span className={styles.pressLabel}>As seen in</span>
              <div className={styles.pressRow}>
                {PRESS_ITEMS.map((pressItem) =>
                  pressItem.articles ? (
                    <PressDropdown key={pressItem.name} item={pressItem} />
                  ) : (
                    <a
                      key={pressItem.name}
                      href={PRESS_LINKS[pressItem.name] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pressChip}
                      title={pressItem.name}
                      aria-label={pressItem.name}
                    >
                      <img src={pressItem.logo} alt="" className={styles.pressLogo} loading="lazy" />
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.captionWrap}>
        <motion.p
          className={styles.caption}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [.22, 1, .36, 1], delay: 0.35 }}
        >
          Arjita — Guiding your journey to better health.
        </motion.p>
      </div>

      <div className={styles.heroWave} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C200,100 500,20 720,50 C940,80 1200,20 1440,55 L1440,120 L0,120 Z"
            fill="rgba(251,250,247,0.55)"
          />
          <path
            d="M0,78 C180,108 440,36 720,64 C1000,92 1260,34 1440,72 L1440,120 L0,120 Z"
            fill="var(--paper)"
          />
        </svg>
      </div>
    </section>
  );
}
