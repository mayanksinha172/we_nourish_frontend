import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CALENDLY } from '../data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, []);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: .5, ease: 'easeOut' }}
      >
        <Link to="/" className={styles.logo} aria-label="WeNourish home">
          <span className={styles.logoWe}>we</span>
          <span className={styles.logoNourish}>nourish</span>
        </Link>

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
            href={CALENDLY}
            target="_blank"
            rel="noopener"
            className="btn-primary"
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
              <a href={CALENDLY} target="_blank" rel="noopener" className={`btn-primary ${styles.mobileBook}`} onClick={() => setMenuOpen(false)}>
                Book Free Call
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
