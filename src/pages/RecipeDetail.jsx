import { Link, useParams } from 'react-router-dom';
import { getRecipeBySlug } from '../data/content';
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
    </>
  );
}
