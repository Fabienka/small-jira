import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../app.post-service';
import { Post } from '../items';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> {{post?.title | titlecase}} </h1>
    <h4> by Author</h4>
    <hr>
    <p style="font-size: larger;"> {{post?.body}} 
    </p>
    <hr>
    <h5>Comments:</h5>
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

  constructor() {
    const itemId = parseInt(this.route.snapshot.params['id'], 10);
    console.log("This is item id: " + itemId);
    console.log("This is result of fnc " + this.route.snapshot.params['id']);
    this.postService.getPostById(itemId).then(post => {
      this.post = post;
    });
  }
}
