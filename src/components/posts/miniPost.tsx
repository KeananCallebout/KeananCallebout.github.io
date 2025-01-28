import { PostType } from "./PostTypes";

export interface miniPostProps {
  post: PostType,
}

export default function MiniPost({post}: miniPostProps) {
  const link = `projects/${post.id}`;
  return (
    <li>
      <article>
        <header>
          <h3><a href={link}>{post.title}</a></h3>
          <time className="published" dateTime={post.dateTime}>{post.date}</time>
        </header>
        <a href={link} className="image"><img src={post.imageSmallUrl} alt={post.title} /></a>
      </article>
    </li>
  );
}