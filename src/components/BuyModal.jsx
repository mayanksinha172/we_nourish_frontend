import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { api, loadRazorpay } from '../services/api';

function BuyerModal({ product, onClose, onSuccess }) {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleBuy(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const ready = await loadRazorpay();
      if (!ready) throw new Error('Could not load payment gateway. Please try again.');

      const order = await api.createOrder(product.id, name, email);

      const options = {
        key: order.key_id,
        amount: order.amount,
        currency: order.currency,
        name: 'WeNourish',
        description: order.product_title,
        order_id: order.razorpay_order_id,
        prefill: { name, email },
        theme: { color: '#287830' },
        handler: async (response) => {
          try {
            const result = await api.verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature,
            );
            onSuccess(result.download_url);
          } catch {
            setError('Payment received but delivery failed. Email us at hello@wenourish.in');
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => setError('Payment failed. Please try again.'));
      rzp.open();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: 16,
      }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        style={{
          background: '#fff', borderRadius: 16, padding: '32px 28px',
          maxWidth: 400, width: '100%', boxShadow: '0 24px 60px rgba(0,0,0,.2)',
        }}
        initial={{ opacity: 0, y: 30, scale: .95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: .97 }}
        transition={{ type: 'spring', damping: 22, stiffness: 220 }}
      >
        <h3 style={{ margin: '0 0 4px', color: '#221026' }}>{product.title}</h3>
        <p style={{ margin: '0 0 20px', color: '#287830', fontWeight: 700, fontSize: 18 }}>
          ₹{product.price_inr}
        </p>
        <form onSubmit={handleBuy} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            type="text" placeholder="Your name" required value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: '12px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: 15 }}
          />
          <input
            type="email" placeholder="Email for delivery" required value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: '12px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: 15 }}
          />
          {error && <p style={{ color: '#c0392b', fontSize: 13, margin: 0 }}>{error}</p>}
          <motion.button
            type="submit"
            style={{
              marginTop: 4, padding: '14px', background: '#287830', color: '#fff',
              border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer',
            }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
            disabled={loading}
          >
            {loading ? 'Processing…' : `Pay ₹${product.price_inr}`}
          </motion.button>
          <button
            type="button" onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#888', fontSize: 13, cursor: 'pointer', padding: 4 }}
          >
            Cancel
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

function DownloadModal({ url, title, onClose }) {
  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: 16,
      }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          background: '#fff', borderRadius: 16, padding: '36px 28px',
          maxWidth: 380, width: '100%', textAlign: 'center',
        }}
        initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
        <h3 style={{ margin: '0 0 8px', color: '#221026' }}>Payment successful!</h3>
        <p style={{ color: '#555', marginBottom: 24 }}>
          Your copy of <strong>{title}</strong> is ready. We've also emailed the download link to you.
        </p>
        <a
          href={url} target="_blank" rel="noreferrer"
          style={{
            display: 'inline-block', background: '#287830', color: '#fff',
            padding: '14px 28px', borderRadius: 8, fontWeight: 700,
            textDecoration: 'none', marginBottom: 12,
          }}
        >
          Download now
        </a>
        <br />
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#888', fontSize: 13, cursor: 'pointer', marginTop: 8 }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export function useCheckout() {
  const [buying, setBuying]     = useState(null);
  const [download, setDownload] = useState(null);

  const modals = (
    <AnimatePresence>
      {buying && (
        <BuyerModal
          key="buyer"
          product={buying}
          onClose={() => setBuying(null)}
          onSuccess={url => { setBuying(null); setDownload({ url, title: buying.title }); }}
        />
      )}
      {download && (
        <DownloadModal
          key="download"
          url={download.url}
          title={download.title}
          onClose={() => setDownload(null)}
        />
      )}
    </AnimatePresence>
  );

  return { openBuy: setBuying, modals };
}
