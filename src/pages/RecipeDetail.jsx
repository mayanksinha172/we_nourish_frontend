import { Link, useParams } from 'react-router-dom';
import { getRecipeBySlug } from '../data/content';
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

  return (
    <article className={styles.detail}>
      <img src={recipe.img} alt={recipe.title} className={styles.heroImg} loading="lazy" />
      <div className={styles.tags}>
        <span className="recipe-tag">{CAT_LABELS[recipe.tag] || recipe.tag}</span>
        {recipe.free && <span className="recipe-tag">Free</span>}
      </div>
      <h1>{recipe.title}</h1>
      <p className={styles.desc}>{recipe.description}</p>
      <p className={styles.meta}>{recipe.time} · {recipe.kcal}</p>
      <h2>Ingredients</h2>
      <ul className={styles.list}>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ol className={styles.steps}>
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <Link to="/recipes" className={styles.back}>← Back to all recipes</Link>
    </article>
  );
}
