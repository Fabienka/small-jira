import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/app.post-service';
import { Post, Comment } from '../../interfaces/items';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    CommonModule,
    CapitalizePipe],
   templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  post: Post | undefined;
  commentList: Comment[] = [];
  author: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.itemDataInit();
  }

  async itemDataInit() {
    const itemId = parseInt(this.route.snapshot.params['id'], 10);

    try {
      this.post = await this.postService.getPostById(itemId);

      if (this.post) {
        const author = await this.postService.getUserById(this.post.userId);
        this.author = author?.name;
      }

      const commentList = await this.postService.getCommentByPostId(itemId);
      this.commentList = commentList;
    } catch (error) {
      this.router.navigate(['/not-found']);
      console.error('Chyba při načítání dat:', error);
    }
  }
}