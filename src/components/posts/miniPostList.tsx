import MiniPost from "./miniPost";
import { PostType } from "./PostTypes";

export interface MiniPostListProps {
  posts: PostType[],
}

export default function MiniPostList({posts}: MiniPostListProps) {
  return (
    <section>					
      <ul className="posts">
        {posts.map(post => <MiniPost post={post} key={post.id}/>)}
      </ul>
    </section>
  );
}