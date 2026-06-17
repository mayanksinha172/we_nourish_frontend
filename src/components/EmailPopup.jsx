import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './EmailPopup.module.css';
import { api } from '../services/api';

const COOKIE = 'wn_popup_seen';

function hasCookie() {
  return document.cookie.split(';').some(c => c.trim().startsWith(`${COOKIE}=`));
}
function setCookie() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  document.cookie = `${COOKIE}=1; expires=${d.toUTCString()}; path=/`;
}

export default function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const nameRef  = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    if (hasCookie()) return;
    const timer = setTimeout(() => setOpen(true), 10000);
    const onLeave = e => { if (e.clientY <= 0) { setOpen(true); document.removeEventListener('mouseleave', onLeave); } };
    document.addEventListener('mouseleave', onLeave);
    return () => { clearTimeout(timer); document.removeEventListener('mouseleave', onLeave); };
  }, []);

  function dismiss() { setCookie(); setOpen(false); }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await api.subscribe(
        nameRef.current.value,
        emailRef.current.value,
        phoneRef.current.value || null,
        'popup',
      );
      setCookie();
      setDone(true);
      setTimeout(dismiss, 2500);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) dismiss(); }}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: .97 }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
          >
            <button className={styles.close} onClick={dismiss} aria-label="Close">
              <i className="fa-solid fa-xmark" />
            </button>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>FREE RECIPES & TIPS</span>
            <h2 className={styles.title}>Join for free recipes & nutrition tips</h2>
            <p className={styles.sub}>Get weekly recipes, practical tips and a free nutrition starter guide — delivered to your inbox.</p>
            {done ? (
              <motion.p
                className={styles.success}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                <i className="fa-solid fa-circle-check" /> Check your inbox!
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input ref={nameRef}  type="text"  placeholder="Your name"      required className={styles.input} />
                <input ref={emailRef} type="email" placeholder="Your email"     required className={styles.input} />
                <input ref={phoneRef} type="tel"   placeholder="Phone (optional)"       className={styles.input} />
                {error && <p style={{ color: '#c0392b', fontSize: 13, margin: '4px 0 0' }}>{error}</p>}
                <motion.button
                  type="submit" className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Send me free recipes'}
                </motion.button>
                <p className={styles.note}>No spam, ever. Unsubscribe any time.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
