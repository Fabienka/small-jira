import { AfterContentInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../app.post-service';
import { Post, Comment } from '../items';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  template: `
  <div class="small-jira-item">
    <h2> {{post?.title | titlecase}} </h2>
    <h3> <i>by {{author}}</i></h3>
    <hr>
    <p> {{post?.body | capitalize}} 
    </p>
    <hr>
    <h5>Comments:</h5>
    <div class="item-detail-comment" *ngFor="let comment of commentList">
      <p><i>{{ comment.email }}</i></p>
      <p><b>{{ comment.name | capitalize }}</b></p>
      <p>{{ comment.body | capitalize}}</p>
      <hr>
    </div>
  </div>
  `,
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  post: Post | undefined;
  commentList: Comment[] = [];
  author: string | undefined;

  
  constructor() {
    const itemId = parseInt(this.route.snapshot.params['id'], 10);
    this.postService.getPostById(itemId).then(post => {
      this.post = post;
      if (this.post) {
      this.postService.getUserById(this.post.userId).then(author => {
        this.author = author?.name
      } )
    }
    })
    this.postService.getCommentByPostId(itemId).then(commentList => {
      this.commentList = commentList
      console.log(this.commentList)
    });
  }
}
