export const NAV_LINKS = [
  { label: 'Home',             path: '/' },
  { label: 'Nutrition Plans',  path: '/nutrition-plans' },
  { label: 'Recipes',          path: '/recipes' },
  { label: 'About',            path: '/about' },
  { label: 'Blog',             path: '/blog' },
];

export const WA_NUTRITION = 'https://wa.me/919100347380?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20nutrition%20consulting';
export const WA_COLLAB    = 'https://wa.me/919963697412?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20brand%20collaboration';
export const EMAIL        = 'hello@wenourish.in';
export const CALENDLY     = 'https://calendly.com'; // replace with real link
export const LOGO_SRC     = '/logo.png';

export const PLATE_IMAGE = 'https://www.fitmeals.co.in/wp-content/uploads/2019/10/plate_rounded.jpg';

export const NUTRITION_PLANS = [
  {
    id: 'weight-loss',
    title: 'Weight Loss Plan',
    subtitle: '4-Week Starter',
    kcal: 'Personalised macros',
    image: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg',
    description: 'A gradual, healthy approach to weight loss with balanced meals, regular check-ins and sustainable habits.',
    includes: ['Personalised diet plan', 'Weekly check-ins', 'WhatsApp support', 'Recipe access'],
    duration: '4 weeks',
  },
  {
    id: 'pcos',
    title: 'PCOS Management Plan',
    subtitle: '8-Week Programme',
    kcal: 'Hormone-balancing nutrition',
    image: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg',
    description: 'Specialised nutrition support for PCOS with evidence-based meal plans and lifestyle guidance.',
    includes: ['PCOS-specific meal plan', 'Bi-weekly check-ins', 'Supplement guidance', 'Lifestyle coaching'],
    duration: '8 weeks',
  },
  {
    id: 'athletic',
    title: 'Athletic Performance Plan',
    subtitle: '12-Week Programme',
    kcal: '1400-1800 Kcal',
    image: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg',
    description: 'High-protein nutrition for muscle building, recovery and peak athletic performance.',
    includes: ['Macro-optimised meal plan', 'Weekly check-ins', 'Pre/post workout nutrition', 'Progress tracking'],
    duration: '12 weeks',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Plan',
    subtitle: 'Ongoing Support',
    kcal: '1400-1600 Kcal',
    image: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg',
    description: 'Maintain your results with moderately portioned meals and ongoing nutritionist support.',
    includes: ['Flexible meal plan', 'Monthly check-ins', 'Recipe library access', 'Lifestyle tips'],
    duration: 'Ongoing',
  },
];

export const STEPS = [
  { num: '01', icon: 'fa-phone',          title: 'Book a free call',        body: 'A 15-minute call to understand your goals and see if we\'re a good fit — no commitment needed.' },
  { num: '02', icon: 'fa-clipboard-list', title: 'Get a personalised plan', body: 'A detailed nutrition plan built around your lifestyle, preferences and health goals — not a generic template.' },
  { num: '03', icon: 'fa-calendar-check', title: 'Weekly check-ins',        body: 'Regular follow-ups to track progress, adjust the plan and keep you on track — every step of the way.' },
  { num: '04', icon: 'fa-chart-line',     title: 'See measurable results',  body: 'Real, sustainable change in how you feel, your health markers and your energy.' },
];

export const TESTIMONIALS = [
  {
    quote: 'The perfect combination of healthy and delicious food. Arjita made sure I reached my fitness goals with frequent follow-up calls — she always checked on my progress. Excellent service, really happy with the results.',
    name: 'Priya S.',
    displayName: 'Priya Sharma',
    outcome: 'Lost 8kg in 3 months',
  },
  {
    quote: 'Living abroad in Singapore, I was worried online consultations wouldn\'t work. Arjita made it seamless — personalised meal plans, easy recipes, and regular check-ins. My energy and digestion have completely transformed.',
    name: 'Rahul M.',
    displayName: 'Rahul Mehta',
    outcome: 'Improved energy and digestion',
  },
  {
    quote: 'I finally found a nutritionist who understands PCOS. The personalised plan made all the difference.',
    name: 'Ananya K.',
    displayName: 'Ananya Kapoor',
    outcome: 'PCOS symptoms improved',
  },
  {
    quote: 'The weekly check-ins kept me accountable. I\'ve never stuck to a plan this long before.',
    name: 'Deepak V.',
    displayName: 'Deepak Verma',
    outcome: '12kg weight loss over 5 months',
  },
];

export const PRESS = ['Indian Express', 'NDTV Food', 'India Today', 'Slurrp'];

export const RECIPES_TEASER = [
  { tag: 'High-Protein', title: 'Quinoa Power Bowl',          desc: 'A balanced high-protein bowl packed with greens, grains and flavour.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
  { tag: 'Fat-Loss',     title: 'Green Detox Salad',          desc: 'Light, refreshing salad designed for sustainable fat loss.',             img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80' },
  { tag: 'Breakfast',    title: 'Overnight Oats with Berries', desc: 'Make-ahead breakfast that keeps you full until lunch.',               img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80' },
  { tag: 'Snacks',       title: 'Almond Date Energy Balls',  img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80' },
  { tag: 'Soups',        title: 'Tomato Lentil Soup',        img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80' },
  { tag: 'Drinks',       title: 'Turmeric Golden Milk',      img: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&q=80' },
];

export const PRODUCTS = [
  {
    title: '30-Day Fat Loss Recipe Book',
    desc: '60 easy recipes for sustainable weight loss without deprivation.',
    price: '₹499',
    img: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg',
  },
  {
    title: 'High-Protein Indian Meals',
    desc: '40 protein-packed recipes for muscle building and energy.',
    price: '₹399',
    img: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg',
  },
  {
    title: 'PCOS-Friendly Recipe Collection',
    desc: 'Hormone-balancing meals designed for PCOS management.',
    price: '₹599',
    img: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg',
  },
];

export const EVENTS_BG =
  'https://www.fitmeals.co.in/wp-content/uploads/2018/02/trial_parallax.jpg';

export const EVENTS_NOTIFY_MESSAGE = 'Notify me about upcoming sessions';

export const FAQS = [
  { q: 'How much do nutrition plans cost?',                              a: 'Plans start from a 4-week programme. Pricing depends on plan length and check-in frequency — book a free call to discuss what works for your budget.' },
  { q: 'How does 1-on-1 nutrition consulting work?',                     a: 'We start with a detailed intake covering your health history, goals and food preferences. You receive a personalised plan with weekly check-ins over WhatsApp and video call.' },
  { q: 'Is this available for clients outside India?',                   a: 'Yes — fully online. We work with clients across the US, Canada, Singapore, the UK and the Middle East. Timezone flexibility is standard.' },
  { q: 'Can you work with specific dietary preferences?',                a: 'Absolutely. Plans are built around your preferences — vegetarian, vegan, Jain, gluten-free or anything else.' },
  { q: 'Do you offer refunds?',                                          a: 'Digital products are non-refundable after download. Consulting plans have a refund policy outlined at booking — see our Refund Policy for details.' },
  { q: 'Do you work with PCOS, thyroid issues or diabetes?',            a: 'Yes. Nutrition support for these conditions is a core part of the practice. A free call helps determine if the approach suits your case.' },
];

export const ALL_RECIPES = [
  {
    slug: 'quinoa-power-bowl',
    tag: 'high-protein',
    title: 'Quinoa Power Bowl',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    time: '30 min',
    kcal: '420 kcal',
    free: true,
    description: 'A colourful, protein-packed bowl with quinoa, roasted vegetables and a lemon-tahini drizzle.',
    ingredients: ['1 cup cooked quinoa', '150g grilled chicken or paneer', 'Mixed roasted vegetables', 'Handful of spinach', 'Lemon-tahini dressing', 'Salt and pepper'],
    steps: ['Cook quinoa until fluffy and let cool slightly.', 'Roast or sauté vegetables with olive oil and spices.', 'Layer quinoa, greens and protein in a bowl.', 'Drizzle with dressing and serve warm.'],
  },
  {
    slug: 'green-detox-salad',
    tag: 'fat-loss',
    title: 'Green Detox Salad',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
    time: '15 min',
    kcal: '180 kcal',
    free: true,
    description: 'Light, refreshing salad designed for sustainable fat loss with fibre-rich greens and a citrus dressing.',
    ingredients: ['2 cups mixed greens', 'Cucumber, sliced', 'Cherry tomatoes', 'Avocado', 'Lemon juice', 'Olive oil', 'Pumpkin seeds'],
    steps: ['Wash and chop all vegetables.', 'Whisk lemon juice, olive oil, salt and pepper.', 'Toss greens with dressing.', 'Top with avocado and pumpkin seeds.'],
  },
  {
    slug: 'overnight-oats-with-berries',
    tag: 'breakfast',
    title: 'Overnight Oats with Berries',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    time: '5 min prep',
    kcal: '320 kcal',
    free: true,
    description: 'No-cook breakfast ready when you wake up — creamy oats layered with fresh berries and almonds.',
    ingredients: ['½ cup rolled oats', '¾ cup milk or almond milk', 'Mixed berries', '1 tbsp chia seeds', 'Honey or maple syrup', 'Sliced almonds'],
    steps: ['Combine oats, milk and chia seeds in a jar.', 'Stir well, cover and refrigerate overnight.', 'Top with berries and almonds before serving.', 'Drizzle with honey if desired.'],
  },
  {
    slug: 'almond-date-energy-balls',
    tag: 'snacks',
    title: 'Almond Date Energy Balls',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80',
    time: '20 min',
    kcal: '120 kcal',
    free: true,
    description: 'Naturally sweet bite-sized snacks with almonds, dates and a hint of cinnamon — perfect pre-workout fuel.',
    ingredients: ['1 cup pitted dates', '¾ cup almonds', '2 tbsp cocoa powder', '1 tsp cinnamon', 'Pinch of salt', 'Desiccated coconut for rolling'],
    steps: ['Blend dates and almonds in a food processor until sticky.', 'Add cocoa, cinnamon and salt; pulse to combine.', 'Roll mixture into small balls.', 'Coat in coconut and chill for 30 minutes.'],
  },
  {
    slug: 'tomato-lentil-soup',
    tag: 'soups',
    title: 'Tomato Lentil Soup',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    time: '35 min',
    kcal: '260 kcal',
    free: true,
    description: 'Hearty, warming soup packed with plant protein from red lentils and ripe tomatoes.',
    ingredients: ['1 cup red lentils', '400g canned tomatoes', '1 onion, diced', '2 cloves garlic', 'Vegetable stock', 'Cumin and turmeric', 'Fresh coriander'],
    steps: ['Sauté onion and garlic until soft.', 'Add lentils, tomatoes, spices and stock.', 'Simmer for 25 minutes until lentils are tender.', 'Blend partially for texture and garnish with coriander.'],
  },
  {
    slug: 'turmeric-golden-milk',
    tag: 'drinks',
    title: 'Turmeric Golden Milk',
    img: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&q=80',
    time: '10 min',
    kcal: '90 kcal',
    free: true,
    description: 'Anti-inflammatory bedtime drink with turmeric, ginger and a touch of black pepper for absorption.',
    ingredients: ['2 cups milk or oat milk', '1 tsp turmeric powder', '½ tsp ginger', 'Pinch of black pepper', '1 tsp honey', 'Cinnamon stick'],
    steps: ['Warm milk in a saucepan over low heat.', 'Whisk in turmeric, ginger and pepper.', 'Simmer for 5 minutes without boiling.', 'Strain, sweeten with honey and serve warm.'],
  },
  {
    slug: 'roasted-beetroot-walnut-salad',
    tag: 'salads',
    title: 'Roasted Beetroot Walnut Salad',
    img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
    time: '40 min',
    kcal: '220 kcal',
    free: true,
    description: 'Earthy roasted beetroot paired with crunchy walnuts and a tangy yoghurt dressing.',
    ingredients: ['2 medium beetroots', '½ cup walnuts', 'Mixed salad leaves', 'Goat cheese or feta', 'Greek yoghurt', 'Lemon juice', 'Olive oil'],
    steps: ['Roast beetroots wrapped in foil at 200°C for 35 minutes.', 'Peel and slice beetroots once cooled.', 'Toast walnuts lightly in a dry pan.', 'Toss with leaves, cheese and yoghurt-lemon dressing.'],
  },
  {
    slug: 'air-fried-paneer-tikka',
    tag: 'air-fried',
    title: 'Air-Fried Paneer Tikka',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
    time: '25 min',
    kcal: '290 kcal',
    free: true,
    description: 'Classic paneer tikka made lighter in the air fryer — smoky, spiced and ready in under 30 minutes.',
    ingredients: ['250g paneer cubes', '½ cup yoghurt', 'Tikka masala spice mix', 'Bell pepper and onion chunks', 'Lemon juice', 'Oil spray'],
    steps: ['Marinate paneer and vegetables in yoghurt and spices for 20 minutes.', 'Thread onto skewers or spread on air fryer tray.', 'Air fry at 190°C for 12–15 minutes, turning once.', 'Squeeze lemon over and serve with mint chutney.'],
  },
  {
    slug: 'roasted-garlic-hummus',
    tag: 'dips',
    title: 'Roasted Garlic Hummus',
    img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80',
    time: '15 min',
    kcal: '140 kcal',
    free: true,
    description: 'Creamy hummus with sweet roasted garlic — ideal for veggie sticks, wraps or toast.',
    ingredients: ['1 can chickpeas', '3 cloves roasted garlic', '3 tbsp tahini', 'Juice of 1 lemon', '2 tbsp olive oil', 'Cumin', 'Paprika for garnish'],
    steps: ['Blend chickpeas, garlic, tahini and lemon until smooth.', 'Stream in olive oil while blending.', 'Season with cumin and salt to taste.', 'Serve drizzled with olive oil and paprika.'],
  },
  {
    slug: 'coconut-chia-pudding',
    tag: 'desserts',
    title: 'Coconut Chia Pudding',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    time: '5 min prep',
    kcal: '200 kcal',
    free: true,
    description: 'A guilt-free dessert with coconut milk, chia seeds and tropical fruit — naturally sweet and filling.',
    ingredients: ['3 tbsp chia seeds', '1 cup coconut milk', '1 tbsp maple syrup', 'Mango or passion fruit', 'Toasted coconut flakes', 'Vanilla extract'],
    steps: ['Whisk chia seeds, coconut milk, syrup and vanilla.', 'Refrigerate for at least 4 hours or overnight.', 'Stir once after 30 minutes to prevent clumping.', 'Top with fruit and coconut flakes before serving.'],
  },
];

export function getRecipeBySlug(slug) {
  return ALL_RECIPES.find((r) => r.slug === slug);
}

export const RECIPE_CATS = ['all','high-protein','fat-loss','breakfast','snacks','drinks','desserts','salads','soups','dips','air-fried'];

export const BLOG_POSTS = [
  { tag: 'Nutrition',    title: 'Why protein matters more than counting calories',               excerpt: 'Most people focus on calories in vs calories out — but the quality of what you eat changes everything.', date: 'June 2025',  img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
  { tag: 'Myth-Busting', title: '5 reasons you should eat mangoes — even when dieting',          excerpt: 'Mangoes have been unfairly villainised. Here\'s the evidence on why the king of fruits belongs on your plate.', date: 'May 2025', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80' },
  { tag: 'Gut Health',   title: 'The gut-hormone connection and what it means for your energy',  excerpt: 'Your gut does a lot more than digest food. Here\'s how the microbiome influences hormones, mood and metabolism.', date: 'April 2025', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
];
