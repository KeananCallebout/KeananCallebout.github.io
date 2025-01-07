import Header from "../components/Header";
import MiniPostList from "../components/posts/miniPostList";
import PostList from "../components/posts/postList";
import About from "../components/sidebar/About";
import Footer from "../components/sidebar/Footer";
import Info from "../components/sidebar/Info";

export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <PostList />
      <div id="sidebar">
        <Info />
        <About />
        <MiniPostList />
        <Footer />
      </div>
    </div>
  );
}