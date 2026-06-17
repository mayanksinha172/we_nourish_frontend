import { Link } from 'react-router-dom';
import { LOGO_SRC, LOGO_SRC_WHITE } from '../data/content';
import styles from './Logo.module.css';

/**
 * Shared WeNourish logo.
 * @param {'nav'|'light'|'center'} variant — 'light' uses the all-white version for dark backgrounds
 */
export default function Logo({ variant = 'nav', className = '', asLink = true }) {
  const src = variant === 'light' ? LOGO_SRC_WHITE : LOGO_SRC;
  const imgClass = variant === 'center' ? styles.center : styles.nav;

  const img = (
    <img
      src={src}
      alt="WeNourish"
      className={`${styles.img} ${imgClass}`}
    />
  );

  if (!asLink) {
    return (
      <span className={`${styles.root} ${className}`} aria-label="WeNourish">
        {img}
      </span>
    );
  }

  return (
    <Link to="/" className={`${styles.root} ${className}`} aria-label="WeNourish home">
      {img}
    </Link>
  );
}
