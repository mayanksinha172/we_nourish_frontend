import PageMeta from '../components/PageMeta';
import policyStyles from './PolicyPage.module.css';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy — WeNourish"
        description="How WeNourish collects, uses and protects your personal information."
      />
      <section className={`${policyStyles.hero} ${styles.hero}`}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>LEGAL</span>
        <h1>Privacy Policy</h1>
      </section>
      <div className={policyStyles.body}>
        <p>Last updated: June 2026</p>

        <h2>Who we are</h2>
        <p>
          WeNourish is a nutrition consulting and wellness brand founded by Arjita. We operate at
          wenourish.in and can be contacted at <a href="mailto:hello@wenourish.in">hello@wenourish.in</a>.
          This policy explains what personal information we collect, how we use it, and your rights
          regarding that information.
        </p>

        <h2>Information we collect</h2>
        <p>We collect personal information in the following situations:</p>
        <ul>
          <li>
            <strong>Email signup forms</strong> — When you subscribe through our website popup,
            footer form, or homepage signup, we collect your name, email address, and optionally
            your phone number.
          </li>
          <li>
            <strong>Booking a free call</strong> — When you book a consultation, we collect your
            name, email, phone number, country/timezone, and a brief note about your health goals.
          </li>
          <li>
            <strong>Purchasing a digital product</strong> — When you buy a recipe book or event
            ticket, payment is processed securely by Razorpay. We receive your name, email, and
            order details. We do not store your card or UPI information.
          </li>
          <li>
            <strong>WhatsApp messages</strong> — If you contact us via WhatsApp, your message and
            phone number are visible to us through that platform.
          </li>
          <li>
            <strong>Browsing data</strong> — We may collect anonymised analytics data (pages
            visited, device type, location at country level) to understand how people use the site.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To send you the free recipe PDF or nutrition guide you signed up for</li>
          <li>To deliver weekly recipe newsletters and nutrition tips (only if you opted in)</li>
          <li>To confirm and manage your consultation booking</li>
          <li>To deliver digital products you have purchased</li>
          <li>To respond to enquiries sent via WhatsApp or email</li>
          <li>To improve the website and understand which content is most useful</li>
        </ul>

        <h2>Email communications</h2>
        <p>
          If you sign up for our email list, you will receive recipes, nutrition tips, and
          occasional updates about new products or events. Every email includes an unsubscribe link.
          You can opt out at any time and we will remove you promptly.
        </p>

        <h2>Sharing your information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We share data only with
          the service providers that help us operate:
        </p>
        <ul>
          <li><strong>Email platform</strong> (Mailchimp / Brevo) — to manage and send emails</li>
          <li><strong>Razorpay</strong> — to process payments securely</li>
          <li><strong>Calendly / Cal.com</strong> — to manage consultation bookings</li>
        </ul>
        <p>
          Each of these providers has their own privacy policy and processes data on our behalf
          under data processing agreements.
        </p>

        <h2>International clients</h2>
        <p>
          We work with clients across India, the US, Canada, Singapore, the UK and the Middle East.
          If you are accessing this site from outside India, your information may be stored or
          processed in servers located in other countries. We take reasonable steps to ensure it
          remains protected.
        </p>

        <h2>Cookies</h2>
        <p>
          We use a single session cookie to remember whether you have already seen the email signup
          popup, so it does not appear repeatedly. This cookie expires after 30 days. We do not use
          advertising or tracking cookies unless you have consented.
        </p>

        <h2>Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request a copy of the personal information we hold about you</li>
          <li>Ask us to correct inaccurate information</li>
          <li>Ask us to delete your information</li>
          <li>Unsubscribe from emails at any time</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top of this page will always
          reflect the most recent version. Continued use of the site after an update constitutes
          acceptance of the revised policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email us at{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a> or message us on WhatsApp.
        </p>
      </div>
    </>
  );
}
