import { PostType } from './PostTypes';
export interface PostProps {
  post: PostType,
}

export default function Post({ post }: PostProps) {
  const link = `projects/${post.id}`;

  return (
    <article className="post">
      <header>
        <div className="title">
          <h2><a href={link}>{post.title}</a></h2>
          <p>{post.keywords}</p>
        </div>
        <div className="meta">
          <time className="published" dateTime={post.dateTime}>{post.date}</time>
        </div>
      </header>
      <a href={link} className="image featured"><img src={post.imageUrl} alt={post.title} /></a>
      <p>{post.summary}</p>
      <footer>
        <ul className="actions">
          <li><a href={link} className="button large">Continue Reading</a></li>
        </ul>
      </footer>
    </article>
  );
}