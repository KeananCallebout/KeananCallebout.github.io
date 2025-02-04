import Post from "./post";
import { PostType } from "./PostTypes";

export interface PostListProps {
  posts: PostType[],
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div id="main">
      {posts.map(post => <Post post={post} key={post.id}/>)}
    </div>
  );
}