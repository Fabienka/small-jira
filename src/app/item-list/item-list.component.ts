import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { PostService } from '../app.post-service';
import {Post,User, Comment, Item} from '../items'
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,
            ItemComponent,
          ItemDetailComponent,
        RouterModule],
  template: `
  <div class="item-list-container">
    <app-item
    *ngFor="let item of itemList"
    [post]="item">
  </app-item>
    <a href="/#top"><img class="backTop-logo" src="/assets/backToTop.svg" alt="logo" aria-hidden="true"></a>
  </div>
  `,
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  itemList: Item[] = [];
  postList: Post[] = [];
  postService: PostService = inject(PostService);
  
  constructor() {
    this.init();
  }
  async init() {
    try {
      this.postList = await this.postService.getAllPosts();
      for (const post of this.postList) {
        const item = await this.postService.mergePostToItem(post);
        this.itemList.push(item);
      }
    } catch (error) {
      console.error('Chyba při načítání dat:', error);
    }
  }

  /*ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
    }*/


}
