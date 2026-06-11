const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8003';

async function post(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Request failed');
  return data;
}

async function get(path) {
  const res = await fetch(`${BASE}${path}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Request failed');
  return data;
}

export const api = {
  subscribe: (name, email, phone, source = 'website') =>
    post('/api/subscribe', { name, email, phone, source }),

  getProducts: () => get('/api/products'),

  createOrder: (product_id, buyer_name, buyer_email) =>
    post('/api/payment/create', { product_id, buyer_name, buyer_email }),

  verifyPayment: (razorpay_order_id, razorpay_payment_id, razorpay_signature) =>
    post('/api/payment/verify', { razorpay_order_id, razorpay_payment_id, razorpay_signature }),

  notifyEvent: (email, name = '') =>
    post('/api/notify-event', { email, name }),
};

export function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}
