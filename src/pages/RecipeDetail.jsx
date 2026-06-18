import { Link, useParams } from 'react-router-dom';
import { getRecipeBySlug, CALENDLY } from '../data/content';
import PageMeta from '../components/PageMeta';
import styles from './RecipeDetail.module.css';

const CAT_LABELS = {
  'high-protein': 'High-Protein',
  'fat-loss': 'Fat-Loss',
  breakfast: 'Breakfast',
  snacks: 'Snacks',
  drinks: 'Drinks',
  desserts: 'Desserts',
  salads: 'Salads',
  soups: 'Soups & Curries',
  dips: 'Dips & Chutneys',
  'air-fried': 'Air-Fried',
};

const NUTRITION_LABELS = [
  { key: 'calories', label: 'Calories', unit: '' },
  { key: 'protein', label: 'Protein', unit: 'g' },
  { key: 'carbs', label: 'Carbs', unit: 'g' },
  { key: 'fat', label: 'Fat', unit: 'g' },
  { key: 'fiber', label: 'Fibre', unit: 'g' },
  { key: 'sugar', label: 'Sugar', unit: 'g' },
];

function formatNutritionValue(key, value, unit) {
  if (value === '—' || value == null) return '—';
  if (key === 'calories') return `${value}kcal`;
  return `${value}${unit}`;
}

function getNutrition(recipe) {
  if (recipe.nutrition) return recipe.nutrition;
  const match = String(recipe.kcal || '').match(/(\d+)/);
  return {
    calories: match ? Number(match[1]) : recipe.kcal,
    protein: '—',
    carbs: '—',
    fat: '—',
    fiber: '—',
    sugar: '—',
  };
}

export default function RecipeDetail() {
  const { slug } = useParams();
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <h1>Recipe not found</h1>
        <Link to="/recipes" className={styles.back}>← Back to all recipes</Link>
      </div>
    );
  }

  const nutrition = getNutrition(recipe);
  const servings = recipe.servings || 1;

  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image: recipe.img,
    description: recipe.description,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
    author: { '@type': 'Person', name: 'Arjita', url: 'https://wenourish.in' },
  };

  return (
    <>
      <PageMeta
        title={`${recipe.title} Recipe — WeNourish`}
        description={recipe.description}
        schema={recipeSchema}
      />
      <article className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>We Nourish Recipe</p>
            <div className={styles.tags}>
              <span className="recipe-tag">{CAT_LABELS[recipe.tag] || recipe.tag}</span>
              {recipe.free && <span className="recipe-tag">Free</span>}
            </div>
            <h1>{recipe.title}</h1>
            <p className={styles.desc}>{recipe.description}</p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Prep: {recipe.time}
              </span>
              <span className={styles.metaDivider} aria-hidden="true" />
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 10h16v10H4z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                {servings} serving{servings > 1 ? 's' : ''}
              </span>
              <span className={styles.metaDivider} aria-hidden="true" />
              <span className={styles.metaItem}>{recipe.kcal}</span>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img src={recipe.img} alt={recipe.title} className={styles.heroImg} loading="lazy" />
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.col}>
            <h2 className={styles.colTitle}>Ingredients</h2>
            <ul className={styles.ingredientList}>
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Method</h2>
            <ol className={styles.methodList}>
              {recipe.steps.map((step, i) => (
                <li key={step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Nutrition</h2>
            <p className={styles.nutritionSub}>Per serving</p>
            <div className={styles.nutritionGrid}>
              {NUTRITION_LABELS.map(({ key, label, unit }) => (
                <div key={key} className={styles.nutritionPill}>
                  <span className={styles.nutritionValueBubble}>
                    {formatNutritionValue(key, nutrition[key], unit)}
                  </span>
                  <span className={styles.nutritionLabel}>{label}</span>
                </div>
              ))}
            </div>
            <p className={styles.nutritionNote}>
              Values are approximate and may vary based on ingredients used.
            </p>
          </div>
        </section>

        <div className={styles.consultPrompt}>
          <p className={styles.consultEyebrow}>Want more like this?</p>
          <h2 className={styles.consultTitle}>Book a free call with Arjita</h2>
          <p className={styles.consultText}>
            Get a personalised nutrition plan with recipes tailored to your goals —
            weight loss, PCOS, thyroid, diabetes and more. Free 15-minute call, no commitment.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Free Call
          </a>
        </div>

        <div className={styles.footerLink}>
          <Link to="/recipes" className={styles.back}>← Back to all recipes</Link>
        </div>
      </article>
    </>
  );
}
