import { PostType } from "../components/posts/PostTypes";
import { postsData } from "../data/posts.json";

import delaware from "../data/delaware.md";
import def from "../data/default.md";

export class PostHandler {
  posts: PostType[];

  constructor(){
    this.posts = postsData;
  }

  public getPosts(): PostType[]{
    return this.posts;
  }

  public getPost(id: string): PostType{
    const post = this.posts.find(post => post.id == id);
    if (post == undefined){
      throw console.error();
    }
    return post;
  }

  public getMarkdown(id: string){
    if (id === '1'){ 
      return (
        delaware
      );
    }

    return def
  }
}