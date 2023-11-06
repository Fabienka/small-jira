import { Injectable } from '@angular/core';
import { Post, User, Comment, Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
/*
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.commentsUrl);
  }
  */
  async getAllPosts(): Promise<Post[]> {
    const data = await fetch(this.postsUrl);
    return await data.json() ?? [];
  }
  async getPostById(id: number): Promise<Post | undefined> {
    const data = await fetch(`${this.postsUrl}/${id}`);
    return await data.json() ?? {};
  }
  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.usersUrl);
    return await data.json() ?? [];
  }
  async getUserById(id: number): Promise<User | undefined> {
    const data = await fetch(`${this.usersUrl}/${id}`);
    return await data.json() ?? {};
  }
  async getCommentByPostId(id: number): Promise<Comment[]> {
    const data = await fetch(`${this.commentsUrl}?postId=${id}`);
    return await data.json() ?? [];
  }

  async mergePostToItem(post: Post ): Promise<Item> {
    let item: Item;
    let user: User | undefined;
     user = await this.getUserById(post.userId)
      item = {
        id:post.id,
        title:post.title,
        postId: post.id,
        author: (user == undefined ? undefined : user.name),
        body: post.body
      }

    return item;
  }
}
