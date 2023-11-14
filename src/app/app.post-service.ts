import { Injectable } from '@angular/core';
import { Post, User, Comment, Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  async getAllPosts(): Promise<Post[]> {
    try {
      const data = await fetch(this.postsUrl);
      if (!data.ok) {
        throw new Error("Nepodařilo se načíst data ze serveru. Kód chyby: " + data.status + ": "  + data.statusText);
      }
    return await data.json() ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

  async getPostById(id: number): Promise<Post> {
    try {
      const data = await fetch(`${this.postsUrl}/${id}`);
      
      if (!data.ok) {
        if(data.status == 404) {
          throw new Error(`Příspěvek nenalezen. Id příspěvku: ${id} `)
        }
        throw new Error("Chyba při získávání dat ze serveru. Kód chyby: " + data.status);
      }
      return await data.json() ?? {};
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: number): Promise<User> {
    try {
      const data = await fetch(`${this.usersUrl}/${id}`);
   
    if (!data.ok) {
      if(data.status == 404) {
        throw new Error(`Uživatel nenalezen. Id uživatele: ${id} `)
      }
      throw new Error("Chyba při získávání dat ze serveru. Kód chyby: " + data.status);
    }
    return await data.json() ?? {};
  } catch (error) {
    throw error;
  }
}
  
  async getCommentByPostId(id: number): Promise<Comment[]> {
    try {
      const data = await fetch(`${this.commentsUrl}?postId=${id}`);
      if (!data.ok) {
        throw new Error("Nepodařilo se načíst data ze serveru. Kód chyby: " + data.status + ": "  + data.statusText);
      }
    return await data.json() ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

  async mergePostToItem(post: Post): Promise<Item> {
    try {
      const user = await this.getUserById(post.userId)
      const commentList = await this.getCommentByPostId(post.id)
       const item = {
          id:post.id,
          post: post,
          author: user,
          comments: commentList
        }
      return item;
    } catch (error) {
      console.error("Chyba při zpracování dat: " + error)
      throw error;
    }
  }

  async getData(): Promise<Item[]> {
    try {
      const postList = await this.getAllPosts();
      const itemList: Item[] = [];
      await Promise.all(postList.map(async (post) => {
        const item = await this.mergePostToItem(post);
        itemList.push(item);
        
      }));
      itemList.sort((a, b) => a.id - b.id);
      return itemList;
    } catch (error) {
      console.error("Chyba při zpracování dat: ", error);
      throw error; 
    }
  }
}
