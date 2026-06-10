import PageMeta from '../components/PageMeta';
import styles from './PolicyPage.module.css';

export default function TermsOfService() {
  return (
    <>
      <PageMeta title="Terms of Service — WeNourish" description="Terms of service for WeNourish." />
      <section className={styles.hero}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>LEGAL</span>
        <h1>Terms of Service</h1>
      </section>
      <div className={styles.body}>
        <p>Last updated: June 2026</p>
        <div className={styles.placeholder}>
          Terms of Service content will be added here. Please check back soon.
        </div>
      </div>
    </>
  );
}
