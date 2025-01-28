import { PostType } from "../components/posts/PostTypes";
import { postsData } from "../data/posts.json";

import delaware from "../data/markdowns/delaware.md";
import rise from "../data/markdowns/rise.md";
import devops from "../data/markdowns/devops.md";
import frontend from "../data/markdowns/frontend.md";

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
    else if (id === '2'){
      return (
        frontend
      );
    }
    else if (id === '3'){
      return (
        devops
      );
    }
    else if (id === '4'){
      return (
        rise
      );
    }

    return def
  }
}