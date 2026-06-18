export const NAV_LINKS = [
  { label: 'Home',             path: '/' },
  { label: 'Nutrition Plans',  path: '/nutrition-plans' },
  { label: 'Recipes',          path: '/recipes' },
  { label: 'About',            path: '/about' },
  { label: 'Blog',             path: '/blog' },
];

export const WA_NUTRITION = 'https://wa.me/918368798448?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20nutrition%20consulting';
export const WA_COLLAB    = 'https://wa.me/918368798448?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20brand%20collaboration';
export const EMAIL        = 'wenourish.arjita@gmail.com';
export const CALENDLY     = 'https://calendly.com'; // replace with real link
export const LOGO_SRC     = '/logo.png';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/we_nourish',
  facebook:  'https://www.facebook.com/wenourish.arjita',
  youtube:   'https://www.youtube.com/@WeNourish',
};

export const INDIAN_EXPRESS_ARTICLES = [
  {
    label: 'Poha',
    url: 'https://indianexpress.com/article/lifestyle/food-wine/protein-week-poha-fibre-easy-recipe-8050669/',
  },
  {
    label: 'Fat Loss',
    url: 'https://indianexpress.com/article/lifestyle/food-wine/easy-fat-loss-snack-evening-cravings-amaranth-benefits-8063461/',
  },
  {
    label: 'Uttapam',
    url: 'https://indianexpress.com/article/lifestyle/food-wine/veggies-loaded-crunchy-uttapam-recipe-8068742/',
  },
];

export const NDTV_FOOD_ARTICLES = [
  {
    label: 'Glowing Skin',
    url: 'https://food.ndtv.com/beauty/tired-of-dull-skin-drink-your-way-to-glowing-healthier-skin-with-this-easy-recipe-5900300',
  },
];

export const INDIA_TODAY_ARTICLES = [
  {
    label: 'High Protein Spread',
    url: 'https://www.indiatoday.in/lifestyle/food/story/ditch-unhealthy-mayonnaise-this-high-protein-spread-recipe-is-a-winner-2483632-2024-01-03',
  },
];

export const SLURRP_ARTICLES = [
  {
    label: 'Monsoon Rasam',
    url: 'https://www.slurrp.com/article/this-nutritionist-approved-rasam-can-be-your-monsoon-staple-1723814998941',
  },
];

export const PRESS_LINKS = {
  'Indian Express': INDIAN_EXPRESS_ARTICLES[0].url,
  'NDTV Food':      NDTV_FOOD_ARTICLES[0].url,
  'India Today':    INDIA_TODAY_ARTICLES[0].url,
  'Slurrp':         SLURRP_ARTICLES[0].url,
};

export const ACTIVE_EVENT = {
  active:   false, // set to true when a session is live
  title:    'Live Nutrition Masterclass',
  date:     'Saturday, 28 June 2026',
  time:     '6:00 PM IST',
  covered:  ['Understanding macros', 'Meal planning basics', 'Q&A with Arjita'],
  price:    '₹499',
};

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
    quote: 'Hi, this is an only appreciation msg. Few months ago on our weekly calls, I told arjita about the dress I was struggling to get into because of my weight gain and now it really does fit me. It\'s all because of you and your holistic approach and a big thank you to Anjali for guiding me everyday through out this journey.',
    name: 'Amisha Metrani',
    displayName: 'Amisha Metrani',
    outcome: 'Age: 25, Female',
  },
  {
    quote: 'These 2 months have been great. I have seen amazing changes in my energy and activity level. I never felt I was on a diet plan as the food options were so vast and were updated every week based on preferences. Thank you so much Arjita & team for being available all the time and answering my queries always. I have gained so much knowledge on the meal plates and will definitely carry forward these learnings.',
    name: 'Madhu Rathod',
    displayName: 'Madhu Rathod',
    outcome: 'Age: 24, Female',
  },
  {
    quote: 'The last one month has been really good, I\'ve lost with a good inch loss. I have been constipated all my life & that issue has been resolved. I am now a lot healthier. My energy levels have been better than before and the best part is that you made diet plan according to what I like to have or make, the dessert recipes are also nice.',
    name: 'Anjuli Marwah',
    displayName: 'Anjuli Marwah',
    outcome: 'Age: 31, Female',
  },
  {
    quote: 'Everything was so simple to follow. I love that you prioritize knowledge before anything else, as it\'s essential to understand the why and how of diet and health. Thanks arjita!',
    name: 'Priya',
    displayName: 'Priya',
    outcome: 'Age: 25, Female',
  },
  {
    quote: 'I am super grateful too arjita for helping me to reach my target weight without losing my muscle mass. Now every second person in my gym comes up to me & says that u motivate us and you are our inspiration. It\'s a great feeling, wouldn\'t be possible without your guidance! Thank-you!',
    name: 'Shazia Dalvi',
    displayName: 'Shazia Dalvi',
    outcome: 'Age: 33, Female',
  },
  {
    quote: 'I was very skeptical about online nutrition consulting but Arjita changed my perspective completely. The plan was practical, easy to follow and fit my busy schedule. Lost 6 kgs in 8 weeks and feel so much lighter and energetic!',
    name: 'Rhea Kapoor',
    displayName: 'Rhea Kapoor',
    outcome: 'Age: 28, Female',
  },
  {
    quote: 'Being a working mom I had no time for elaborate meal plans. Arjita designed something that worked around my life, not the other way. My PCOS symptoms have improved significantly and I finally have energy throughout the day.',
    name: 'Sunita Sharma',
    displayName: 'Sunita Sharma',
    outcome: 'Age: 36, Female',
  },
  {
    quote: 'The weekly check-ins kept me accountable in a way I never experienced before. Arjita genuinely cares about your progress. I\'ve tried so many diets before — this is the first time I\'ve actually stuck to a plan and seen real results.',
    name: 'Karan Mehta',
    displayName: 'Karan Mehta',
    outcome: 'Age: 29, Male',
  },
  {
    quote: 'I joined with the goal of improving my thyroid health through diet. Within 10 weeks my levels improved and my doctor was pleasantly surprised. The meal plans are delicious and never feel restrictive.',
    name: 'Deepa Nair',
    displayName: 'Deepa Nair',
    outcome: 'Age: 42, Female',
  },
  {
    quote: 'What I loved most is how Arjita explains the science behind every recommendation. I feel educated, not just instructed. My relationship with food has completely transformed and I no longer fear carbs!',
    name: 'Tanvi Joshi',
    displayName: 'Tanvi Joshi',
    outcome: 'Age: 27, Female',
  },
];

export const CREDIBILITY_STATS = [
  { num: '600K+', label: 'Community' },
  { num: '10+',   label: 'Years Experience' },
  { num: '500+',  label: 'Happy Clients' },
];

export const BRAND_ASSOCIATIONS = [
  { name: 'Healthify Me',  logo: '/brands/healthify.svg'  },
  { name: 'Cult.fit',      logo: '/brands/cultfit.svg'    },
  { name: 'GOQii',         logo: '/brands/goqii.svg'      },
  { name: 'Mamaearth',     logo: '/brands/mamaearth.svg'  },
];

export const REELS = [
  {
    id: 'malai-pyaz',
    src: '/reels/malai-pyaz.mp4',
    caption: '10-min High Protein Malai Pyaz',
    tag: 'High-Protein',
    recipe: {
      title: 'High Protein Malai Pyaz',
      time: '10 min',
      servings: '2 servings',
      intro: 'A creamy, restaurant-style sabzi made with zero malai — the "malai" is made from paneer, curd and a few cashews. Lighter, higher in protein and honestly creamier than the original.',
      ingredients: [
        '200g paneer, crumbled',
        '3 tbsp thick curd (dahi)',
        '10–12 cashews',
        '2 large onions, sliced into rings',
        '1 tsp ghee',
        '1 tsp ginger-garlic paste',
        '1 green chilli, slit',
        '½ tsp cumin seeds',
        '½ tsp coriander powder',
        '¼ tsp garam masala',
        'Salt to taste',
        'Fresh coriander to garnish',
      ],
      steps: [
        'Blend paneer, curd and cashews with a splash of water until completely smooth. This is your protein "malai" — set aside.',
        'Heat ghee in a pan. Add cumin seeds and let them splutter.',
        'Add ginger-garlic paste and green chilli. Sauté for 30 seconds.',
        'Add sliced onions and cook on medium heat until they are soft and slightly golden, about 4–5 minutes.',
        'Lower the heat and add coriander powder, garam masala and salt. Mix well.',
        'Pour in the paneer-curd blend. Stir gently and cook on low heat for 2–3 minutes — do not boil or the curd will split.',
        'Garnish with coriander and serve hot with roti or paratha. Add cucumber or salad on the side for fibre.',
      ],
      tip: 'To boost protein further, add a handful of silken tofu to the paneer blend before blending — it disappears into the gravy and bumps up the protein without changing the taste.',
    },
  },
  {
    id: 'thalipeeth',
    src: '/reels/thalipeeth.mp4',
    caption: 'Protein Power Thalipeeth',
    tag: 'High-Fiber',
    recipe: {
      title: 'Protein Power Thalipeeth',
      time: '30 min',
      servings: '5–6 thalipeeth',
      intro: 'A multigrain flatbread packed with plant protein from soy, fibre from ragi and amaranth, and iron from beetroot. Meal-prep friendly and naturally vegetarian.',
      ingredients: [
        '1 cup dry soy chunks',
        '1-inch ginger',
        '4–5 garlic cloves',
        '1 green chilli',
        '1 onion, finely chopped',
        '2 handfuls red amaranth leaves, finely chopped',
        '1 small beetroot, finely chopped',
        '1 cup besan (chickpea flour)',
        '½ cup oats flour',
        '¼ cup ragi flour',
        '½ cup water (adjust as needed)',
        'Salt to taste',
        '2 tsp paratha masala (or any spice mix)',
        'Sesame seeds for topping',
        'Curry leaves, chopped',
        'Ghee for cooking',
      ],
      steps: [
        'Boil soy chunks until soft, then squeeze out excess water. Add to an electric chopper with ginger, garlic and green chilli. Pulse until finely grated.',
        'Transfer to a large bowl. Add onion, red amaranth leaves and beetroot. Mix well.',
        'Add besan, oats flour, ragi flour, salt and masala. Mix everything together.',
        'Add water gradually — the mixture should hold together when pressed into a ball, not be doughy or runny.',
        'Place a banana leaf (or damp cloth) on your counter. Take a ball of mixture, place on the leaf and pat into a thin circle with wet fingers. Seal any cracks at the edges.',
        'Sprinkle sesame seeds and curry leaves on top.',
        'Heat a heavy-bottom tawa with a little ghee. Carefully transfer the thalipeeth onto the tawa and peel away the leaf.',
        'Cook on low-medium heat for 7–10 minutes until crisp underneath. Flip and cook the other side for 5–7 minutes.',
        'Serve hot with dahi, mushroom matar sabzi or homemade aam chutney.',
      ],
      tip: 'Make the mixture the night before and refrigerate. Cook fresh thalipeeth in the morning — the flavours develop beautifully overnight.',
    },
  },
  {
    id: 'protein-popcorn',
    src: '/reels/protein-popcorn.mp4',
    caption: 'Healthy Protein Popcorn (Crispy Chickpeas)',
    tag: 'Snack',
    recipe: {
      title: 'Tahini Crispy Chickpeas',
      time: '25 min',
      servings: '3 servings',
      intro: 'Air-fried chickpeas coated in a nutty tahini blend — crunchy, satisfying, and packed with plant protein and fibre. Eat as a snack or toss into salads, wraps, grain bowls and chaat for extra crunch.',
      ingredients: [
        '1 can (400g) chickpeas, drained and rinsed',
        '2 tbsp tahini',
        '1 tbsp olive oil',
        '1 tsp cumin powder',
        '½ tsp smoked paprika',
        '½ tsp garlic powder',
        '¼ tsp chilli flakes (optional)',
        'Salt to taste',
        'Juice of ½ lemon',
      ],
      steps: [
        'Pat chickpeas completely dry with a kitchen towel — this is the key to crunch.',
        'Whisk together tahini, olive oil, lemon juice, cumin, paprika, garlic powder, chilli flakes and salt in a bowl.',
        'Toss dried chickpeas in the tahini mixture until evenly coated.',
        'Spread in a single layer in the air fryer basket.',
        'Air fry at 200°C for 15–18 minutes, shaking the basket halfway through, until golden and crispy.',
        'Let cool for 5 minutes — they crisp up further as they cool.',
        'Store in an open container at room temperature for up to 2 days.',
      ],
      macros: { kcal: '~215 kcal', protein: '~10g protein', fiber: '~6–7g fibre' },
      tip: 'Don\'t have an air fryer? Spread on a baking tray and roast at 200°C for 25–30 minutes, turning once halfway.',
    },
  },
  {
    id: 'tiramisu-rice-cake',
    src: '/reels/tiramisu-rice-cake.mp4',
    caption: 'High-Protein Tiramisu Rice Cake',
    tag: 'Dessert',
    recipe: {
      title: 'High-Protein Tiramisu Rice Cake',
      time: '10 min',
      servings: '2 servings',
      intro: 'Creamy, rich, and ridiculously satisfying — this dessert packs 28g of protein per serving at just 225 kcal. Perfect for sweet cravings, PMS days, or anyone who wants a dessert that actually supports fat-loss goals.',
      ingredients: [
        '4 plain rice cakes',
        '1 cup Greek yogurt (or hung curd)',
        '1 scoop vanilla or unflavoured protein powder (~25–30g protein)',
        '1–2 tsp instant coffee or espresso powder',
        '1 tbsp hot water',
        '1 tsp cacao powder (unsweetened)',
        '1–2 tsp monk fruit sweetener or stevia (adjust to taste)',
        'A pinch of salt',
      ],
      steps: [
        'Dissolve coffee in 1 tbsp hot water. Let it cool slightly.',
        'In a bowl, mix Greek yogurt, protein powder, sweetener and a pinch of salt until smooth and creamy.',
        'Taste and adjust sweetness — it should be lightly sweet like tiramisu cream.',
        'Dip each rice cake briefly into the coffee mixture so it absorbs a little — do not soak, just a quick dip.',
        'Layer: rice cake → generous dollop of protein cream → another rice cake → more cream on top.',
        'Dust cacao powder generously over the top through a small sieve.',
        'Eat immediately for a soft-top texture, or refrigerate for 20 minutes for a firmer, more set tiramisu feel.',
      ],
      macros: { kcal: '~225 kcal', protein: '~27.5g protein', fiber: 'per serving (½ recipe)' },
      tip: 'Make the cream the night before and refrigerate — the flavours deepen beautifully. Assemble with rice cakes just before eating so they stay slightly crisp underneath.',
    },
  },
  {
    id: 'amla-chokha',
    src: '/reels/amla-chokha.mp4',
    caption: 'Bhuna Tamatar Amla Mooli Chokha',
    tag: 'Chutney',
    recipe: {
      title: 'Bhuna Tamatar Amla Mooli Chokha',
      time: '20 min',
      servings: '4 servings',
      intro: 'A smoky, tangy chutney packed with Vitamin C from amla, gut-friendly radish, and antioxidant-rich tomatoes. Eat it as a subzi with roti, serve it with chips like a desi salsa, or add a spoonful to any thali to make it instantly healthier.',
      ingredients: [
        'For roasting:',
        '4 desi tomatoes, halved',
        '1 tbsp mustard oil',
        'Pinch of hing (asafoetida)',
        '4–5 garlic cloves',
        'Salt to taste',
        '',
        'For grinding:',
        '2 green chillies',
        '½ radish (mooli)',
        '10–12 tender radish leaves',
        '1 amla (Indian gooseberry)',
        'Salt and black salt to taste',
        'Chaat masala to taste',
        '',
        'For finishing:',
        '1 small onion, finely chopped',
        'Fresh coriander leaves',
        'Juice of 1 lemon',
      ],
      steps: [
        'Heat mustard oil in a heavy pan until it just starts to smoke (this removes the raw smell). Add a pinch of hing.',
        'Place tomato halves cut-side down in the pan. Add garlic cloves and salt. Cook on low-medium heat until the tomatoes char slightly, turn soft, and develop a smoky flavour — about 8–10 minutes.',
        'Remove from heat and let cool. Once cool, peel off and discard the tomato skins for a smoother texture.',
        'Add the roasted tomatoes and garlic to a chopper along with green chillies, mooli, radish leaves, amla, salt, black salt and chaat masala.',
        'Pulse to a coarse texture — do not blend smooth. The chunkiness is what makes this a chokha, not a paste.',
        'Transfer to a serving bowl. Mix in finely chopped onion, fresh coriander and lemon juice.',
        'Taste and adjust salt and acidity. Serve immediately or refrigerate for up to 2 days.',
      ],
      tip: 'The amla is the secret ingredient — it adds a bright, tart note and floods the chutney with Vitamin C, which also helps your body absorb iron from the rest of your meal better.',
    },
  },
  {
    id: 'strawberry-cheesecake-icecream',
    src: '/reels/strawberry-cheesecake-icecream.mp4',
    caption: 'High-Protein Strawberry Cheesecake Ice Cream',
    tag: 'Dessert',
    recipe: {
      title: 'High-Protein Strawberry Cheesecake Ice Cream',
      time: '10 min + freeze time',
      servings: '2 servings',
      intro: 'Three versions of a creamy, tangy, high-protein frozen dessert — from a 2-minute blender version to a proper scoopable ice cream. No ice cream machine needed, no sugar load, and it actually tastes like cheesecake.',
      ingredients: [
        'Version 1 — Strawberry Banana (instant):',
        '1 cup frozen strawberries',
        '1 ripe banana, frozen',
        '',
        'Version 2 — High-Protein Cheesecake (recommended):',
        '100g paneer, crumbled',
        '½ cup thick yogurt (dahi)',
        '1 cup frozen strawberries',
        '1–2 tsp monk fruit sweetener or stevia',
        'A pinch of salt',
        '',
        'Version 3 — Scoopable frozen version:',
        'Same as Version 2 ingredients',
        'Freeze the blended mixture for 3–4 hours, stirring once at the 1-hour mark',
      ],
      steps: [
        'Version 1: Feed frozen strawberries and banana through a juicer on the slow-juicer setting, or blend until smooth and creamy. Eat immediately — it has a soft-serve texture.',
        'Version 2 (cheesecake): Add paneer, yogurt, frozen strawberries, sweetener and salt to a blender. Blend until completely smooth and creamy. The paneer gives it that unmistakable cheesecake tang.',
        'Taste and adjust sweetness. Serve immediately as a thick, creamy dessert — or pour into a freezer-safe container.',
        'Version 3: Pour the Version 2 mixture into a container. Freeze for 1 hour, then stir well to break up ice crystals. Return to freezer for another 2–3 hours until scoopable.',
        'Scoop and serve straight from the freezer. If it sets too hard, leave at room temperature for 5 minutes before scooping.',
      ],
      tip: 'Frozen berries are better than fresh for this recipe — they\'re picked at peak ripeness, naturally sweeter, and give a more consistent flavour year-round. Look for frozen berries with no added sugar or syrup.',
    },
  },
  {
    id: 'blender-brownies',
    src: '/reels/blender-brownies.mp4',
    caption: 'Easy High-Protein Blender Brownies',
    tag: 'Dessert',
    recipe: {
      title: 'High-Protein Blender Brownies',
      time: '25 min',
      servings: '6 brownies',
      intro: 'Rich, dark, gooey brownies made in a blender — no flour, no refined sugar. Sweet potato or ripe banana forms the base, peanut butter adds healthy fat, and a clean chocolate ganache on top makes these genuinely indulgent. PCOS-friendly, gut-friendly, and fat-loss friendly.',
      ingredients: [
        '1 medium sweet potato, cooked and mashed (or 1 very ripe banana)',
        '2 tbsp natural peanut butter',
        '2 tbsp cacao powder (unsweetened)',
        '1 scoop chocolate protein powder (~25g)',
        '4–5 soft Medjool dates, pitted',
        '1 egg (or 1 flax egg for vegan)',
        '½ tsp baking powder',
        'Pinch of salt',
        '',
        'For the chocolate ganache:',
        '2 tbsp dark chocolate chips or chopped dark chocolate (70%+)',
        '1 tbsp coconut milk or any milk',
      ],
      steps: [
        'Preheat oven to 180°C (or air fryer to 160°C).',
        'Add sweet potato (or banana), dates, peanut butter, cacao powder, protein powder, egg, baking powder and salt to a blender. Blend until completely smooth — scrape down the sides as needed.',
        'The batter will be thick. Pour into a small greased or lined baking tin (or silicone muffin moulds for individual brownies).',
        'Bake for 18–22 minutes in the oven, 15–18 minutes in the air fryer, or 6–8 minutes on convection mode in a microwave. A toothpick inserted in the centre should come out with a few moist crumbs — not wet batter.',
        'While brownies cool, make the ganache: melt dark chocolate with milk over a double boiler or in 20-second microwave bursts, stirring between each, until smooth.',
        'Spread ganache over cooled brownies. Refrigerate for 15 minutes to set.',
        'Slice and serve. Store refrigerated for up to 4 days.',
      ],
      tip: 'Sweet potato gives a denser, fudgier texture; banana gives a lighter, more cakey result. Both work — use whichever you have. If your dates are dry, soak them in warm water for 10 minutes before blending.',
    },
  },
  {
    id: 'shakshuka',
    src: '/reels/shakshuka.mp4',
    caption: 'Easy One-Pan Shakshuka',
    tag: 'Breakfast',
    recipe: {
      title: 'One-Pan Shakshuka',
      time: '20 min',
      servings: '2 servings',
      intro: 'One pan, minimal cleanup, and one of the most nourishing breakfasts you can make. Eggs poached in a spiced tomato-pepper sauce — high protein, high fibre, gut-friendly, and deeply warming. Pair with sourdough toast for the ultimate winter breakfast.',
      ingredients: [
        '3 eggs',
        '4 tomatoes, roughly chopped',
        '1 red bell pepper, roughly chopped',
        '1 onion, roughly chopped',
        '3 garlic cloves',
        '1 green chilli',
        '1 tsp butter',
        '1 tsp red chilli powder',
        '1 tsp black pepper',
        'Salt to taste',
        'Fresh green garlic or coriander, to garnish',
        'Chilli flakes and dried oregano (optional)',
      ],
      steps: [
        'Heat butter in a wide pan over medium heat.',
        'Finely chop onion, garlic and green chilli in an electric chopper (or by hand). Add to the pan and cook until fragrant — about 2–3 minutes.',
        'Add chopped red bell pepper. Cook for 2 minutes.',
        'Add chopped tomatoes, salt, red chilli powder and black pepper. Stir and cook on medium heat for 5–10 minutes until everything is soft, saucy and slightly thickened.',
        'Use the back of a spoon to make 3 small wells in the sauce. Crack one egg into each well.',
        'Cover the pan and cook on low heat. For a runny yolk: 3–4 minutes. For set yolks: 6–7 minutes.',
        'Garnish with fresh green garlic (or coriander), chilli flakes and oregano if using. Serve straight from the pan.',
      ],
      tip: 'The sauce is forgiving — you can add spinach, crumbled paneer or chickpeas to the base before adding eggs to boost protein and fibre further. Leftovers reheat well; just add a splash of water to loosen the sauce.',
    },
  },
];

export const PRESS_ITEMS = [
  { name: 'Indian Express', logo: '/press/indian-express.svg', articles: INDIAN_EXPRESS_ARTICLES },
  { name: 'NDTV Food',      logo: '/press/ndtv.svg', articles: NDTV_FOOD_ARTICLES },
  { name: 'India Today',    logo: '/press/india-today.svg', articles: INDIA_TODAY_ARTICLES },
  { name: 'Slurrp',         logo: '/press/slurrp.svg', articles: SLURRP_ARTICLES },
];

export const PRESS = PRESS_ITEMS.map((item) => item.name);

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
  {
    slug:    'why-protein-matters',
    tag:     'Nutrition',
    title:   'Why protein matters more than counting calories',
    excerpt: 'Most people focus on calories in vs calories out — but the quality of what you eat changes everything.',
    date:    'June 2025',
    img:     'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    body: [
      'Most people begin their health journey by counting calories. It makes intuitive sense — eat less, weigh less. But this view misses something fundamental: not all calories do the same thing inside your body. A 200-calorie handful of almonds and a 200-calorie packet of biscuits trigger entirely different hormonal and metabolic responses.',
      'Protein is the macronutrient that changes the game. It has the highest thermic effect of any food — your body burns around 25–30% of protein calories just digesting it. It preserves lean muscle mass during weight loss, which is critical because muscle is metabolically active tissue that keeps your resting metabolism high. And it directly reduces hunger by suppressing ghrelin (the hunger hormone) and boosting satiety signals.',
      'In practice, this means that two people eating the same number of calories can have very different results if their protein intake differs. Aim for 1.2–2g of protein per kilogram of body weight, distributed across meals. Indian food is rich in excellent protein sources — paneer, dal, rajma, eggs, curd, chicken — so hitting this target is more achievable than most people think. Start there before you ever open a calorie-counting app.',
    ],
  },
  {
    slug:    'eat-mangoes-when-dieting',
    tag:     'Myth-Busting',
    title:   '5 reasons you should eat mangoes — even when dieting',
    excerpt: 'Mangoes have been unfairly villainised. Here\'s the evidence on why the king of fruits belongs on your plate.',
    date:    'May 2025',
    img:     'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80',
    body: [
      'Every summer, without fail, I get the same question: "Should I avoid mangoes because of the sugar?" The short answer is no — and the full answer reveals a lot about how we\'ve been taught to fear fruit unnecessarily.',
      'Mangoes are rich in fibre, vitamin C, vitamin A, folate, and a range of polyphenol antioxidants including mangiferin, which has been shown in research to support blood sugar regulation and reduce inflammation. The natural sugar in a mango comes packaged with fibre that slows absorption, making the glycaemic impact far lower than the same amount of sugar from a processed source. One cup of mango (around 165g) contains about 25g of carbohydrates and 3g of fibre — a perfectly reasonable part of a balanced meal.',
      'The five reasons to keep mangoes in your diet: they support gut health via prebiotic fibre; they provide vitamin A for immune function and skin health; their antioxidant load protects against oxidative stress; they\'re hydrating (83% water) which supports metabolism; and they make eating healthily feel like a pleasure rather than a punishment. Food you enjoy is food you stick with. That is the real secret to sustainable nutrition.',
    ],
  },
  {
    slug:    'gut-hormone-connection',
    tag:     'Gut Health',
    title:   'The gut-hormone connection and what it means for your energy',
    excerpt: 'Your gut does a lot more than digest food. Here\'s how the microbiome influences hormones, mood and metabolism.',
    date:    'April 2025',
    img:     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    body: [
      'The gut is sometimes called the second brain — and for good reason. Your gastrointestinal tract contains over 100 million neurons, produces around 95% of the body\'s serotonin, and hosts roughly 38 trillion microbial cells that influence everything from how you absorb nutrients to how your stress response behaves. When gut health is disrupted, the effects ripple outward in ways that can look like fatigue, mood swings, hormonal imbalance, or stubborn weight that won\'t shift.',
      'One of the most important gut-hormone links is with cortisol, your primary stress hormone. Chronic gut inflammation signals the immune system to stay on alert, which keeps cortisol elevated. Elevated cortisol disrupts sleep, increases appetite for high-sugar foods, promotes fat storage around the abdomen, and suppresses thyroid function. This is why clients with persistent gut issues often report weight gain, low energy, and difficulty sleeping — even when their diet looks reasonable on paper.',
      'The practical levers are well established: eat 30 or more distinct plant foods per week (diversity matters more than quantity), include fermented foods like curd, kefir, or homemade pickles regularly, prioritise sleep of 7–9 hours (gut repair happens overnight), and manage stress through whatever reliable method works for you. These are not glamorous interventions, but they consistently produce the kind of sustained energy improvements that no supplement can replicate.',
    ],
  },
];
