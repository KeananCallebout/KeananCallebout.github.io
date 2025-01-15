import { PostType } from './PostTypes';
export interface PostProps {
  post: PostType,
}

export default function Post({ post }: PostProps) {
  const href = `projects/${post.id}`;

  return (
    <article className="post">
      <header>
        <div className="title">
          <h2><a href="projects/1">{post.title}</a></h2>
          <p>{post.keywords}</p>
        </div>
        <div className="meta">
          <time className="published" dateTime={post.dateTime}>{post.date}</time>
        </div>
      </header>
      <a href="projects/1" className="image featured"><img src={post.imageUrl} alt="" /></a>
      <p>{post.summary}</p>
      <footer>
        <ul className="actions">
          <li><a href={href} className="button large">Continue Reading</a></li>
        </ul>
      </footer>
    </article>
  );
}