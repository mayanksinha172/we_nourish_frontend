import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data/content';
import ClosingCTA from '../sections/ClosingCTA';
import PageMeta from '../components/PageMeta';
import styles from './BlogDetail.module.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Article not found</h1>
        <Link to="/blog" className={styles.back}>← Back to blog</Link>
      </div>
    );
  }

  const metaDesc = post.body?.[0]
    ? post.body[0].split('.')[0] + '.'
    : post.excerpt;

  return (
    <>
      <PageMeta
        title={`${post.title} — WeNourish Blog`}
        description={metaDesc}
      />
      <article className={styles.article}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${post.img})` }}
          role="img"
          aria-label={post.title}
        />
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.tag}>{post.tag}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.body}>
            {post.body?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link to="/blog" className={styles.back}>← Back to all articles</Link>
        </div>
      </article>
      <ClosingCTA />
    </>
  );
}
