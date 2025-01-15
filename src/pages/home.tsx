import Header from "../components/Header";
import MiniPostList from "../components/posts/miniPostList";
import PostList from "../components/posts/postList";
import About from "../components/sidebar/About";
import Footer from "../components/sidebar/Footer";
import Info from "../components/sidebar/Info";
import { PostHandler } from "../data/PostsHandler";

export default function Home() {
  
  const postHandler = new PostHandler();

  return (
    <div id="wrapper">
      <Header />
      <PostList posts={postHandler.getPosts()} />
      <div id="sidebar">
        <Info />
        <About />
        <MiniPostList posts={postHandler.getPosts()} />
        <Footer />
      </div>
    </div>
  );
}