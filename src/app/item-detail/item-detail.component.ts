import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../app.post-service';
import { Post, Comment } from '../items';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="small-jira-item">
    <h2> {{post?.title | titlecase}} </h2>
    <h3> <i>by Author</i></h3>
    <hr>
    <p style="font-size: larger;"> {{post?.body}} 
    </p>
    <hr>
    <h5>Comments:</h5>
    <div style="text-align: left;" *ngFor="let comment of commentList">
      <p><i>{{ comment.email }}</i></p>
      <p><b>{{ comment.name }}</b></p>
      <p>{{ comment.body }}</p>
      <hr>
    </div>
  </div>
      <!-- Modal   
        <div class="modal-dialog" role="document">
          <div>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            </div>
            <div class="modal-body">
              {{ post?.title }}
            </div>
          </div>
        </div>-->   

  `,
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  post: Post | undefined;
  commentList: Comment[] = [];

  
  constructor() {
    const itemId = parseInt(this.route.snapshot.params['id'], 10);
    this.postService.getPostById(itemId).then(post => {
      this.post = post;
    })
    this.postService.getCommentByPostId(itemId).then(commentList => {
      this.commentList = commentList
      console.log(this.commentList)
    });
    //this.init(itemId);
  }
  async init(id: number) {
    try {
     
      console.log(this.commentList);
    } catch (error) {
      console.error('Chyba při načítání dat:', error);
    }
  }
}
