import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './EmailPopup.module.css';

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

  useEffect(() => {
    if (hasCookie()) return;
    const timer = setTimeout(() => setOpen(true), 15000);
    const onLeave = e => { if (e.clientY <= 0) { setOpen(true); document.removeEventListener('mouseleave', onLeave); } };
    document.addEventListener('mouseleave', onLeave);
    return () => { clearTimeout(timer); document.removeEventListener('mouseleave', onLeave); };
  }, []);

  function dismiss() { setCookie(); setOpen(false); }

  function handleSubmit(e) {
    e.preventDefault();
    setCookie();
    setDone(true);
    setTimeout(dismiss, 2000);
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
            <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>FREE NUTRITION GUIDE</span>
            <h2 className={styles.title}>Get our starter guide — free</h2>
            <p className={styles.sub}>5 nutrition principles that actually work, delivered to your inbox instantly.</p>
            {done ? (
              <motion.p
                className={styles.success}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                <i className="fa-solid fa-circle-check" /> Check your inbox!
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text"  placeholder="Your name"  required className={styles.input} />
                <input type="email" placeholder="Your email" required className={styles.input} />
                <input type="tel"   placeholder="Phone (optional)" className={styles.input} />
                <motion.button
                  type="submit" className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                >
                  Send me the guide
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
