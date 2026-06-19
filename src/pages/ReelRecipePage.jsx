import { useParams, Link } from 'react-router-dom';
import { REELS, SOCIAL_LINKS } from '../data/content';
import PageMeta from '../components/PageMeta';
import FadeUp from '../components/FadeUp';
import styles from './ReelRecipePage.module.css';

export default function ReelRecipePage() {
  const { id } = useParams();
  const reel = REELS.find((r) => r.id === id);

  if (!reel) {
    return (
      <div className={styles.notFound}>
        <h2>Recipe not found</h2>
        <Link to="/" className={styles.backLink}>← Back to home</Link>
      </div>
    );
  }

  const r = reel.recipe;

  return (
    <>
      <PageMeta
        title={`${r.title} — WeNourish`}
        description={r.intro}
      />

      <div className={styles.page}>
        <FadeUp>
          <div className={styles.backRow}>
            <Link to="/" className={styles.backLink}>
              <i className="fa-solid fa-arrow-left" /> Back
            </Link>
          </div>

          <div className={styles.hero}>
            <span className={`eyebrow ${styles.tag}`}>{reel.tag}</span>
            <h1 className={styles.title}>{r.title}</h1>

            <div className={styles.metaRow}>
              <span><i className="fa-regular fa-clock" /> {r.time}</span>
              <span><i className="fa-solid fa-utensils" /> {r.servings}</span>
              {r.macros && (
                <>
                  <span><i className="fa-solid fa-fire" /> {r.macros.kcal}</span>
                  <span><i className="fa-solid fa-drumstick-bite" /> {r.macros.protein}</span>
                </>
              )}
            </div>

            <p className={styles.intro}>{r.intro}</p>
          </div>
        </FadeUp>

        <div className={styles.body}>
          <FadeUp>
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>Ingredients</h2>
              <ul className={styles.ingredientList}>
                {r.ingredients.map((ing, i) =>
                  ing === '' ? (
                    <li key={i} className={styles.spacer} />
                  ) : (
                    <li key={i}>{ing}</li>
                  )
                )}
              </ul>
            </section>
          </FadeUp>

          <FadeUp>
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>Method</h2>
              <ol className={styles.stepList}>
                {r.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>
          </FadeUp>

          {r.tip && (
            <FadeUp>
              <div className={styles.tip}>
                <i className="fa-solid fa-lightbulb" />
                <p>{r.tip}</p>
              </div>
            </FadeUp>
          )}

          <FadeUp>
            <div className={styles.igCta}>
              <p>Liked this recipe? Find more on Instagram.</p>
              <a
                href={reel.instagramUrl || SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igBtn}
              >
                <i className="fa-brands fa-instagram" /> Follow @we_nourish
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
