import { PostType } from "./PostTypes";

export interface miniPostProps {
  post: PostType,
}

export default function MiniPost({post}: miniPostProps) {
  return (
    <li>
      <article>
        <header>
          <h3><a href="projects/1">{post.title}</a></h3>
          <time className="published" dateTime={post.dateTime}>{post.date}</time>
        </header>
        <a href="projects/1" className="image"><img src={post.imageSmallUrl} alt="" /></a>
      </article>
    </li>
  );
}