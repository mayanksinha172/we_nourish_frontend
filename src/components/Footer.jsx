import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, WA_NUTRITION, WA_COLLAB, EMAIL } from '../data/content';
import Logo from './Logo';
import styles from './Footer.module.css';

const EXPLORE_LINKS = NAV_LINKS;

function LinkArrow() {
  return (
    <svg className={styles.linkArrow} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MORE_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Brand Collaborations', href: WA_COLLAB, external: true },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Refund Policy', href: '#' },
];

export default function Footer() {
  const [signup, setSignup] = useState({ name: '', email: '' });
  const [done, setDone] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setSignup({ name: '', email: '' });
    setDone(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <Logo variant="boxed" className={styles.logoWrap} />
        <p className={styles.about}>
          WeNourish helps you eat well beautifully. Personalised nutrition plans,
          delicious recipes and 1-on-1 consulting with Arjita.
        </p>
        <div className={styles.socials}>
          {[
            { icon: 'fa-instagram', label: 'Instagram' },
            { icon: 'fa-youtube', label: 'YouTube' },
            { icon: 'fa-facebook', label: 'Facebook' },
            { icon: 'fa-linkedin', label: 'LinkedIn' },
          ].map((s) => (
            <a key={s.icon} href="#" aria-label={s.label} className={styles.socialIcon}>
              <i className={`fa-brands ${s.icon}`} />
            </a>
          ))}
        </div>
        <div className={styles.waRow}>
          <a href={WA_NUTRITION} target="_blank" rel="noopener" className={styles.waBtn}>
            Nutrition Enquiry
          </a>
          <a href={WA_COLLAB} target="_blank" rel="noopener" className={styles.waBtn}>
            Brand Collaboration
          </a>
        </div>
      </div>

      <div className={`${styles.col} ${styles.linkCol}`}>
        <h4 className={styles.heading}>Explore</h4>
        {EXPLORE_LINKS.map(({ label, path }) => (
          <Link key={path} to={path} className={styles.link}>
            <LinkArrow />
            {label}
          </Link>
        ))}
      </div>

      <div className={`${styles.col} ${styles.linkCol}`}>
        <h4 className={styles.heading}>Links</h4>
        {MORE_LINKS.map((item) =>
          item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener" className={styles.link}>
              <LinkArrow />
              {item.label}
            </a>
          ) : item.path ? (
            <Link key={item.label} to={item.path} className={styles.link}>
              <LinkArrow />
              {item.label}
            </Link>
          ) : (
            <a key={item.label} href={item.href} className={styles.link}>
              <LinkArrow />
              {item.label}
            </a>
          )
        )}
      </div>

      <div className={`${styles.col} ${styles.linkCol}`}>
        <h4 className={styles.heading}>Contact</h4>
        <div className={styles.emailRow}>
          <i className="fa-solid fa-envelope" aria-hidden="true" />
          <span className={styles.emailLabel}>Email :</span>
        </div>
        <a href={`mailto:${EMAIL}`} className={styles.email}>{EMAIL}</a>

        <div className={styles.signup}>
          <p className={styles.signupLabel}>Get new recipes and tips</p>
          {done ? (
            <p className={styles.signupDone}>Subscribed! Check your email.</p>
          ) : (
            <form onSubmit={handleSignup} className={styles.signupForm}>
              <input
                type="text"
                placeholder="Name"
                required
                value={signup.name}
                onChange={(e) => setSignup({ ...signup, name: e.target.value })}
                className={styles.signupInput}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={signup.email}
                onChange={(e) => setSignup({ ...signup, email: e.target.value })}
                className={styles.signupInput}
              />
              <button type="submit" className={styles.signupBtn}>Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
}
