import PageMeta from '../components/PageMeta';
import styles from './PolicyPage.module.css';

export default function RefundPolicy() {
  return (
    <>
      <PageMeta title="Refund Policy — WeNourish" description="Refund policy for WeNourish digital products and consulting plans." />
      <section className={styles.hero}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>LEGAL</span>
        <h1>Refund Policy</h1>
      </section>
      <div className={styles.body}>
        <p>Last updated: June 2026</p>
        <h2>Digital Products</h2>
        <p>
          All digital products (recipe books, downloadable guides) are non-refundable once the
          download link has been accessed or the file has been delivered to your email address.
          Please review product descriptions carefully before purchasing.
        </p>
        <h2>Nutrition Consulting Plans</h2>
        <p>
          Refund terms for consulting plans are outlined at the time of booking and vary by plan
          length. Please refer to your booking confirmation for the specific terms applicable to
          your plan.
        </p>
        <div className={styles.placeholder}>
          Full refund policy details will be added here. Please check back soon or contact us at
          hello@wenourish.in for any queries.
        </div>
      </div>
    </>
  );
}
