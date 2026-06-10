import PageMeta from '../components/PageMeta';
import styles from './PolicyPage.module.css';

export default function TermsOfService() {
  return (
    <>
      <PageMeta
        title="Terms of Service — WeNourish"
        description="Terms and conditions for using WeNourish services, purchasing digital products and booking consultations."
      />
      <section className={styles.hero}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>LEGAL</span>
        <h1>Terms of Service</h1>
      </section>
      <div className={styles.body}>
        <p>Last updated: June 2026</p>

        <h2>About these terms</h2>
        <p>
          These terms govern your use of wenourish.in and any services, products or content
          provided by WeNourish (operated by Arjita). By using this website or purchasing any
          product or service, you agree to these terms. If you do not agree, please do not use
          the site.
        </p>

        <h2>The services we provide</h2>
        <p>WeNourish offers:</p>
        <ul>
          <li>1-on-1 nutrition consulting via video and WhatsApp</li>
          <li>Personalised diet plans and ongoing check-ins</li>
          <li>Digital recipe books and downloadable nutrition guides</li>
          <li>Live online sessions and masterclasses</li>
          <li>Free recipes and nutrition content on this website</li>
        </ul>

        <h2>Nutrition advice disclaimer</h2>
        <p>
          The content on this website — including recipes, articles, and general nutrition
          information — is for educational purposes only. It is not a substitute for professional
          medical advice, diagnosis, or treatment. Always consult your doctor or a qualified
          healthcare professional before making significant changes to your diet, especially if you
          have a medical condition such as diabetes, thyroid disorders, or cardiovascular disease.
        </p>
        <p>
          Personalised nutrition plans provided through our consulting service are based on the
          information you share with us. Results vary between individuals and are not guaranteed.
        </p>

        <h2>Booking a free consultation</h2>
        <p>
          The free 15-minute call is an introductory conversation with no obligation. It does not
          constitute the start of a consulting relationship or a medical consultation. We reserve
          the right to decline or reschedule bookings at our discretion.
        </p>

        <h2>Consulting plans</h2>
        <ul>
          <li>Plan details, duration, and pricing are confirmed at the time of booking.</li>
          <li>Plans are personal to you and may not be transferred to another person.</li>
          <li>
            You are responsible for attending scheduled check-ins. Missed sessions without 24-hour
            notice may be forfeited.
          </li>
          <li>
            We will make reasonable efforts to accommodate rescheduling requests with adequate notice.
          </li>
          <li>
            Results depend on your adherence to the plan. WeNourish cannot guarantee specific
            outcomes.
          </li>
        </ul>

        <h2>Digital products</h2>
        <ul>
          <li>
            Recipe books and downloadable guides are delivered electronically after payment is
            confirmed.
          </li>
          <li>
            You are purchasing a personal, non-exclusive licence to use the content. You may not
            reproduce, resell, or distribute it without written permission.
          </li>
          <li>
            All content is the intellectual property of WeNourish and Arjita. Recipes, photographs,
            and text may not be copied or republished without credit and prior consent.
          </li>
        </ul>

        <h2>Payments</h2>
        <p>
          Payments are processed securely by Razorpay. We accept UPI, debit/credit cards, net
          banking, and international cards. All prices are listed in Indian Rupees (INR) unless
          stated otherwise. Taxes, if applicable, are included in the listed price.
        </p>

        <h2>Free recipes and website content</h2>
        <p>
          All recipes and articles published on this website are free to read and use for personal,
          non-commercial purposes. Credit to WeNourish / Arjita is appreciated when sharing.
          Commercial use requires written permission.
        </p>

        <h2>Email communications</h2>
        <p>
          By signing up for our email list, you consent to receiving recipe newsletters, nutrition
          tips, and occasional product updates. You can unsubscribe at any time using the link in
          any email.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          WeNourish and Arjita are not liable for any indirect, incidental, or consequential damages
          arising from use of this website or reliance on its content. Our liability in connection
          with any purchase is limited to the amount paid for that product or service.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes will be subject to the
          jurisdiction of courts in India.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms periodically. The date at the top of this page reflects the
          current version. Continued use of the site constitutes acceptance.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email us at{' '}
          <a href="mailto:hello@wenourish.in">hello@wenourish.in</a>.
        </p>
      </div>
    </>
  );
}
