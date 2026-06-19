import PageMeta from '../components/PageMeta';
import policyStyles from './PolicyPage.module.css';
import heroStyles from './RefundPolicy.module.css';

export default function RefundPolicy() {
  return (
    <>
      <PageMeta
        title="Refund Policy — WeNourish"
        description="Refund and cancellation policy for WeNourish digital products and nutrition consulting plans."
      />
      <section className={`${policyStyles.hero} ${heroStyles.hero}`}>
        <div className={heroStyles.heroCopy}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>LEGAL</span>
          <h1>Refund Policy</h1>
        </div>
      </section>
      <div className={policyStyles.body}>
        <p>Last updated: June 2026</p>

        <p>
          We want you to feel confident purchasing from WeNourish. Please read this policy carefully
          before completing any purchase, as the nature of digital and service-based products means
          refunds are handled on a case-by-case basis.
        </p>

        <h2>Digital products (recipe books & guides)</h2>
        <p>
          All digital products — including recipe books and downloadable nutrition guides — are
          delivered electronically and are <strong>non-refundable once the download link has been
          accessed or the file has been delivered to your email address</strong>.
        </p>
        <p>
          Before purchasing, please read the product description carefully. If you have questions
          about whether a product is right for you, email us at{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a> before buying and we will
          help you decide.
        </p>
        <p>
          <strong>Exception:</strong> If you did not receive your download link or the file is
          corrupted or inaccessible, contact us within 7 days of purchase and we will resend it
          or issue a full refund.
        </p>

        <h2>Nutrition consulting plans</h2>
        <p>Refund eligibility for consulting plans depends on when the request is made:</p>
        <ul>
          <li>
            <strong>Before the plan starts:</strong> Full refund if you cancel at least 48 hours
            before your first scheduled session.
          </li>
          <li>
            <strong>Within the first 7 days:</strong> A pro-rated refund may be issued for
            unused sessions, at our discretion, if extenuating circumstances apply.
          </li>
          <li>
            <strong>After 7 days or mid-plan:</strong> No refund is available for work already
            completed or sessions already delivered. Unused sessions may be rescheduled within
            the plan period.
          </li>
        </ul>
        <p>
          To request a refund for a consulting plan, email{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a> with your booking details
          and reason for the request.
        </p>

        <h2>Live sessions & events</h2>
        <ul>
          <li>
            <strong>Cancellation more than 48 hours before the event:</strong> Full refund.
          </li>
          <li>
            <strong>Cancellation within 48 hours of the event:</strong> No refund, but your
            registration may be transferred to a future session of the same type.
          </li>
          <li>
            <strong>If WeNourish cancels or reschedules an event:</strong> You will receive a full
            refund or the option to attend the rescheduled session.
          </li>
        </ul>

        <h2>Payment processing</h2>
        <p>
          Refunds are processed back to the original payment method via Razorpay. Processing time
          is typically 5–10 business days depending on your bank or card issuer. We have no control
          over the timeline once the refund is initiated on our end.
        </p>

        <h2>How to request a refund</h2>
        <p>Email <a href="mailto:hello@wenourish.in">hello@wenourish.in</a> with:</p>
        <ul>
          <li>Your full name and email address used at purchase</li>
          <li>The product or plan you purchased</li>
          <li>Your order or booking reference number</li>
          <li>The reason for your refund request</li>
        </ul>
        <p>We aim to respond to all refund requests within 2 business days.</p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this policy, please reach out at{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a> before making a purchase.
          We are always happy to help.
        </p>
      </div>
    </>
  );
}
