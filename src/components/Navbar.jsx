import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, WA_NUTRITION } from '../data/content';
import Logo from './Logo';
import styles from './Navbar.module.css';

const NAV_HIDE_OFFSET = 72;

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]     = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const lastScrollY = useRef(0);
  const solidNav = pathname !== '/';
  const isHomeTop = pathname === '/' && !scrolled;
  const navVisible = menuOpen || !hidden;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y <= NAV_HIDE_OFFSET) {
        setHidden(false);
      } else if (y < lastScrollY.current) {
        setHidden(false);
      } else if (y > lastScrollY.current + 6) {
        setHidden(true);
      }

      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--nav-sticky-top',
      hidden && !menuOpen ? '0px' : `${NAV_HIDE_OFFSET}px`,
    );
  }, [hidden, menuOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
    lastScrollY.current = 0;
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isHomeTop ? styles.homeTop : ''} ${!isHomeTop && (solidNav || scrolled) ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: navVisible ? 0 : '-100%', opacity: 1 }}
        transition={{ duration: navVisible ? 0.5 : 0.3, ease: navVisible ? 'easeOut' : 'easeInOut' }}
      >
        <Logo variant="nav" className={styles.logo} />

        <div className={styles.links}>
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
         <motion.a
           href={WA_NUTRITION}
           target="_blank"
           rel="noopener"
           className={`btn-primary ${styles.bookCall}`}
           whileHover={{ scale: 1.04 }}
           whileTap={{ scale: .97 }}
         >
           Book Free Call
         </motion.a>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
              {NAV_LINKS.map(({ label, path }) => (
                <NavLink key={path} to={path} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              ))}
              <a href={WA_NUTRITION} target="_blank" rel="noopener" className={`btn-primary ${styles.mobileBook}`} onClick={() => setMenuOpen(false)}>
                Book Free Call
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
