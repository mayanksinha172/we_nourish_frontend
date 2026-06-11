export const ONE_TIME_CONSULTATION = {
  id: 'srijan',
  step: '03',
  name: 'Srijan',
  title: 'One Time Consultation',
  price: '₹2,499',
  bestFor:
    'Best for someone who wants a personalised diet chart and basic guidelines without regular weekly monitoring.',
  includes: [
    'Personalised diet chart after assessing current health status and future health goals',
    'Customised guidelines to build a better relationship with food',
    'Plan made after understanding eating patterns, blood work and lifestyle',
    'Trial pack does not include regular monitoring or weekly consultations',
  ],
};

export const PLAN_TYPES = [
  {
    id: 'sampoorna',
    step: '01',
    name: 'Sampoorna',
    title: 'Individual Plan',
    label: 'For individual',
    priceRange: '₹8,999 – ₹62,999',
    description:
      'A complete 1-on-1 nutrition support plan for one person with personalised diet planning, monitoring and ongoing guidance.',
    includes: [
      'Customised meal plan',
      'Daily monitoring',
      'Chat support',
      'Weekly calls with Arjita',
    ],
  },
  {
    id: 'sahayoga',
    step: '02',
    name: 'Sahayoga',
    title: 'Couple Plan',
    label: 'For couple',
    priceRange: '₹14,999 – ₹99,999',
    description:
      'A shared nutrition journey for couples who want personalised wellness guidance together with the same support structure.',
    includes: [
      'Customised meal plan for both individual',
      'Daily monitoring',
      'Chat support',
      'Weekly calls with Arjita',
    ],
  },
];

export const PLAN_COMPARISON = [
  {
    duration: '4 weeks',
    sampoorna: '₹8,999',
    sahayoga: '₹14,999',
    calls: '2',
    bloodReports: '1',
  },
  {
    duration: '8 weeks',
    sampoorna: '₹14,999',
    sahayoga: '₹24,999',
    calls: '4',
    bloodReports: '1',
  },
  {
    duration: '12 weeks',
    sampoorna: '₹20,999',
    sahayoga: '₹34,999',
    calls: '6',
    bloodReports: '1',
  },
  {
    duration: '24 weeks',
    sampoorna: '₹35,999',
    sahayoga: '₹59,999',
    calls: '12',
    bloodReports: '2',
  },
  {
    duration: '52 weeks',
    sampoorna: '₹62,999',
    sahayoga: '₹99,999',
    calls: '26',
    bloodReports: '3',
  },
];

export const INCLUDED_IN_ALL_PLANS = [
  'Personalised diet plan',
  'Medical-condition customisation',
  'Chat support for queries',
  'Daily monitoring with health logs',
  'WeNourish healthy recipes',
];
