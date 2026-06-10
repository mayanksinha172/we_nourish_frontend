import PageMeta from '../components/PageMeta';
import styles from './PolicyPage.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy — WeNourish" description="Privacy policy for WeNourish." />
      <section className={styles.hero}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>LEGAL</span>
        <h1>Privacy Policy</h1>
      </section>
      <div className={styles.body}>
        <p>Last updated: June 2026</p>
        <div className={styles.placeholder}>
          Privacy Policy content will be added here. Please check back soon.
        </div>
      </div>
    </>
  );
}
