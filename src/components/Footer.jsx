import { Link } from 'react-router-dom';
import { NAV_LINKS, WA_NUTRITION, WA_COLLAB, EMAIL } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <Link to="/" className={styles.logo} aria-label="WeNourish home">
          <span className={styles.we}>we</span><span className={styles.nourish}>nourish</span>
        </Link>
        <p className={styles.tagline}><em>— nourishment, refined</em></p>
        <div className={styles.socials}>
          {[
            { icon: 'fa-instagram', label: 'Instagram' },
            { icon: 'fa-youtube',   label: 'YouTube' },
            { icon: 'fa-facebook',  label: 'Facebook' },
            { icon: 'fa-linkedin',  label: 'LinkedIn' },
          ].map(s => (
            <a key={s.icon} href="#" aria-label={s.icon} className={styles.socialIcon}>
              <i className={`fa-brands ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Explore</h4>
        {NAV_LINKS.map(({ label, path }) => (
          <Link key={path} to={path} className={styles.link}>{label}</Link>
        ))}
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Legal</h4>
        {['Privacy Policy','Terms of Service','Refund Policy'].map(l => (
          <a key={l} href="#" className={styles.link}>{l}</a>
        ))}
        <a href={WA_COLLAB} target="_blank" rel="noopener" className={styles.link}>Brand Collaborations</a>
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Contact</h4>
        <a href={`mailto:${EMAIL}`} className={`${styles.link} ${styles.emailLink}`}>
          <i className="fa-solid fa-envelope" /> {EMAIL}
        </a>
        <a href={WA_NUTRITION} target="_blank" rel="noopener" className="footer-wa-btn">
          <i className="fa-brands fa-whatsapp" /> Nutrition Enquiry
        </a>
        <a href={WA_COLLAB} target="_blank" rel="noopener" className="footer-wa-btn alt">
          <i className="fa-brands fa-whatsapp" /> Brand Collaboration
        </a>
        <div className={styles.signup}>
          <p className={styles.signupLabel}>Get new recipes and tips</p>
          <div className={styles.signupRow}>
            <input type="text"  placeholder="Name" className={styles.signupInput} />
            <input type="email" placeholder="Email" className={styles.signupInput} />
            <button className="btn-primary sm">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
