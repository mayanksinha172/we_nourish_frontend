import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, WA_NUTRITION, WA_COLLAB, EMAIL, SOCIAL_LINKS } from '../data/content';
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

function IconEmail() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M2 7l10 7 10-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.9 5 12 5 12 5s-5.9 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.1 19 12 19 12 19s5.9 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIAL_ICON_ITEMS = [
  { label: 'Instagram', key: 'instagram', Icon: IconInstagram },
  { label: 'Facebook',  key: 'facebook',  Icon: IconFacebook },
  { label: 'YouTube',   key: 'youtube',   Icon: IconYoutube },
];

const MORE_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Brand Collaborations', path: '/brand-collaborations' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Refund Policy', path: '/refund-policy' },
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
          {SOCIAL_ICON_ITEMS.map(({ label, key, Icon }) => (
            <a key={key} href={SOCIAL_LINKS[key]} aria-label={label} className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <Icon />
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
        {MORE_LINKS.map((item) => (
          <Link key={item.label} to={item.path} className={styles.link}>
            <LinkArrow />
            {item.label}
          </Link>
        ))}
      </div>

      <div className={`${styles.col} ${styles.linkCol}`}>
        <h4 className={styles.heading}>Contact</h4>
        <div className={styles.contactIcons}>
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email ${EMAIL}`}
            className={styles.contactIcon}
          >
            <IconEmail />
          </a>
          {SOCIAL_ICON_ITEMS.map(({ label, key, Icon }) => (
            <a
              key={key}
              href={SOCIAL_LINKS[key]}
              aria-label={label}
              className={styles.contactIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>

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
