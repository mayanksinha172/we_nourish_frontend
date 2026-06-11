import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { CALENDLY, WA_NUTRITION, PRESS_ITEMS, PRESS_LINKS } from '../data/content';
import arjita from '../assets/arjita.png';
import decor from '../assets/decor.png';
import styles from './Hero.module.css';

function PressDropdown({ item }) {
  const chipRef = useRef(null);
  const closeTimer = useRef(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    if (!chipRef.current) return;
    const rect = chipRef.current.getBoundingClientRect();
    const menuHeight = 190;
    const gap = 10;
    let top = rect.bottom + gap;
    const maxTop = window.innerHeight - menuHeight - 8;
    if (top > maxTop) top = Math.max(rect.bottom + gap, maxTop);
    setPos({
      top,
      left: rect.left + rect.width / 2,
    });
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
    const onScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [open, updatePosition]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div
      className={styles.pressDropdown}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      onFocus={showMenu}
      onBlur={hideMenu}
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
  show: { transition: { staggerChildren: .12, delayChildren: .25 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, ease: [.22,1,.36,1] } },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Text side */}
      <motion.div className={styles.content} variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          Nutritionist · Wellness Expert · Author
        </motion.span>

        <motion.h1 variants={item}>
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

        <motion.div className={styles.cred} variants={item}>
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
          <div className={styles.pressRow}>
            <span className={styles.pressLabel}>As seen in</span>
            {PRESS_ITEMS.map((item) =>
              item.articles ? (
                <PressDropdown key={item.name} item={item} />
              ) : (
                <a
                  key={item.name}
                  href={PRESS_LINKS[item.name] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pressChip}
                  title={item.name}
                  aria-label={item.name}
                >
                  <img
                    src={item.logo}
                    alt=""
                    className={styles.pressLogo}
                    loading="lazy"
                  />
                </a>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Photo side */}
      <motion.div
        className={styles.visualCol}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7, ease: [.22,1,.36,1], delay: .2 }}
      >
        <div className={styles.leafShadow} aria-hidden="true" />
        <div className={styles.leafShadowAlt} aria-hidden="true" />
        <div className={styles.photoWrap}>
          <div className={styles.archWindow}>
            <div className={styles.archBackdrop} aria-hidden="true" />
            <img
              src={arjita}
              alt="Arjita — WeNourish nutritionist"
              className={styles.photo}
            />
            <p className={styles.caption}>Arjita — Guiding your journey to better health.</p>
            <img
              src={decor}
              alt=""
              className={styles.heroDeco}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </motion.div>

      <div className={styles.heroWave} aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
          <path
            d="M0,40 C320,72 520,8 720,36 C920,64 1120,16 1440,44 L1440,72 L0,72 Z"
            fill="var(--paper)"
          />
        </svg>
      </div>
    </section>
  );
}
