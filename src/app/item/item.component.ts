import { AfterContentInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import {Item} from '../items'
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from '../capitalize.pipe';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent, RouterModule, CapitalizePipe],
  template: `
    <div class="small-jira-item">
      <h4 class="item-card-title"> {{post.title | titlecase}}</h4>
      <span class="item-card-author"> by <b>{{post.author | uppercase}}</b></span>
      <hr>
      <div class="item-card-description"> {{(post.body | slice:0:120) +'...' | capitalize}}  </div>
      <div class="row">
        <div class="item-card-link"> <a [routerLink]="['/detail', post.postId]">See more...</a> </div>
        <div class="item-card-comments"> Comments: {{commentsCount}} </div>
      </div>
   </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterContentInit {
      @Input() post!: Item;
      commentsCount = 0;
  
    constructor() {
    }
    ngAfterContentInit(): void {
      if (this.post) {
        this.commentsCount = this.post.comments.length;
      }
    }
    
}
