import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS, getRecipeBySlug, WA_NUTRITION } from '../data/content';
import ClosingCTA from '../sections/ClosingCTA';
import PageMeta from '../components/PageMeta';
import styles from './BlogDetail.module.css';

const SITE = 'https://wenourish.in';

const MONTH_MAP = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
};

function parseBlogDate(dateStr) {
  const [month, year] = dateStr.split(' ');
  return `${year}-${MONTH_MAP[month] || '01'}-01`;
}

function absoluteUrl(path) {
  if (!path) return SITE;
  if (path.startsWith('http')) return path;
  return `${SITE}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildRecipeSchema(recipe) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image: absoluteUrl(recipe.img),
    description: recipe.description,
    author: { '@type': 'Person', name: 'Arjita', url: SITE },
  };

  if (recipe.ingredients?.length) {
    schema.recipeIngredient = recipe.ingredients;
  }

  if (recipe.steps?.length) {
    schema.recipeInstructions = recipe.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    }));
  }

  if (recipe.nutrition) {
    const n = recipe.nutrition;
    schema.nutrition = {
      '@type': 'NutritionInformation',
      calories: `${n.calories} calories`,
      proteinContent: `${n.protein}g`,
      carbohydrateContent: `${n.carbs}g`,
      fatContent: `${n.fat}g`,
      fiberContent: `${n.fiber}g`,
      sugarContent: `${n.sugar}g`,
    };
  }

  return schema;
}

function buildBlogSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: absoluteUrl(post.img),
    datePublished: parseBlogDate(post.date),
    author: { '@type': 'Person', name: 'Arjita', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'WeNourish',
      url: SITE,
    },
    articleSection: post.tag,
    keywords: post.seoTitle?.split('—')[0]?.trim() || post.tag,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };
}

const CONSULT_COPY = {
  pcos: 'Get a personalised PCOS nutrition plan with meal ideas tailored to your symptoms and labs.',
  thyroid: 'Get a thyroid diet plan built around your labs, medications and everyday Indian meals.',
  'weight-loss': 'Get sustainable weight loss guidance that fits your lifestyle — no crash diets.',
  'gut-health': 'Get gut-focused nutrition support to improve digestion, energy and hormone balance.',
  diabetes: 'Get blood sugar-friendly meal planning tailored to your readings and routine.',
  'hormonal-health': 'Get hormonal health nutrition guidance for energy, cycles and long-term balance.',
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Article not found</h1>
        <Link to="/blog" className={styles.back}>← Back to blog</Link>
      </div>
    );
  }

  const relatedRecipes = (post.relatedRecipes || [])
    .map(getRecipeBySlug)
    .filter(Boolean);

  const schema = [
    buildBlogSchema(post),
    ...relatedRecipes.map(buildRecipeSchema),
  ];

  const consultText = CONSULT_COPY[post.category]
    || 'Get personalised nutrition guidance tailored to your goals and health conditions.';

  return (
    <>
      <PageMeta
        title={post.seoTitle || `${post.title} — WeNourish Blog`}
        description={post.seoDescription || post.excerpt}
        schema={schema}
      />
      <article className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>We Nourish Blog</p>
            <div className={styles.tags}>
              <span className="recipe-tag">{post.tag}</span>
            </div>
            <h1>{post.title}</h1>
            <p className={styles.desc}>{post.excerpt}</p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10h18M8 2v4M16 2v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {post.date}
              </span>
              <span className={styles.metaDivider} aria-hidden="true" />
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img src={post.img} alt={post.title} className={styles.heroImg} loading="lazy" />
          </div>
        </section>

        <section className={styles.grid}>
          {post.body?.map((para, i) => (
            <div key={i} className={styles.col}>
              <div className={styles.bodyText}>
                <p>{para}</p>
              </div>
            </div>
          ))}
        </section>

        {relatedRecipes.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>Try these recipes</h2>
            <p className={styles.relatedSub}>
              Recipes that match this article&apos;s nutrition focus.
            </p>
            <div className={styles.relatedGrid}>
              {relatedRecipes.map((recipe) => (
                <Link
                  key={recipe.slug}
                  to={`/recipes/${recipe.slug}`}
                  className={styles.recipeCard}
                >
                  <img src={recipe.img} alt={recipe.title} loading="lazy" />
                  <div className={styles.recipeBody}>
                    <h3>{recipe.title}</h3>
                    <p className={styles.recipeMeta}>{recipe.time} · {recipe.kcal}</p>
                    {recipe.nutrition && (
                      <p className={styles.recipeNutrition}>
                        {recipe.nutrition.protein}g protein · {recipe.nutrition.fiber}g fibre
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className={styles.consultPrompt}>
          <p className={styles.consultEyebrow}>Need personalised help?</p>
          <h2 className={styles.consultTitle}>Book a free consultation with Arjita</h2>
          <p className={styles.consultText}>{consultText}</p>
          <a
            href={WA_NUTRITION}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Free Call
          </a>
        </div>

        <div className={styles.footerLink}>
          <Link to="/blog" className={styles.back}>← Back to all articles</Link>
        </div>
      </article>
      <ClosingCTA />
    </>
  );
}
