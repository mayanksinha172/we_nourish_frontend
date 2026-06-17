import { Link } from 'react-router-dom';
import { LOGO_SRC } from '../data/content';
import styles from './Logo.module.css';

/**
 * Shared wenourish logo — same asset everywhere (`LOGO_SRC`).
 * @param {'nav'|'boxed'|'center'} variant
 */
export default function Logo({ variant = 'nav', className = '', asLink = true }) {
  const img = (
    <img
      src={LOGO_SRC}
      alt="wenourish"
      className={`${styles.img} ${styles[variant === 'boxed' ? 'boxed' : variant]}`}
    />
  );

  const inner = variant === 'boxed' ? <span className={styles.box}>{img}</span> : img;

  if (!asLink) {
    return (
      <span className={`${styles.root} ${className}`} aria-label="wenourish">
        {inner}
      </span>
    );
  }

  return (
    <Link to="/" className={`${styles.root} ${className}`} aria-label="WeNourish home">
      {inner}
    </Link>
  );
}
