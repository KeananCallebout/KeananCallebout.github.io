import Markdown  from "react-markdown";
import Header from "../components/Header";
import Footer from "../components/sidebar/Footer";
import Info from "../components/sidebar/Info";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import { PostHandler } from "../data/PostsHandler";
import { useParams } from "react-router-dom";

export default function Project() {
  
  const { id } = useParams();
  const postHandler = new PostHandler();
  const post = postHandler.getPost(id ?? "");

  return (
    <div id="wrapper">
      <Header />
      
      <div id="main">
        <Markdown  remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={postHandler.getMarkdown(post.id)} />
      </div>
      <div id="sidebar">
        <Info title={post.title}/>
        <Footer />
      </div>
    </div>
  );
}