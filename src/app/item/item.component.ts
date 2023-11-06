import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Item} from '../items'
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent, RouterModule],
  template: `
    <div class="item-card">
      <h4 class="item-card-title"> {{post.title | titlecase}}</h4>
      <span class="item-card-author"> {{post.author | uppercase}}</span>
      <div class="item-card-description"> {{(post.body | slice:0:75) +'...'}}  </div>
      <div class="row" style="width: auto; max-width: 100%">
        <div class="item-card-description" style="width: 50%;"> <a [routerLink]="['/detail', post.postId]">See more...</a> </div>
        <div class="item-card-comments" style="width: 50%;"> Comments: {{commentsCount}} </div>
      </div>
   </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
      @Input() post!: Item;
      @Input() commentsCount!: number;
  
    constructor(private modalService: NgbModal) {}

    openModal() {
      let modalRef = this.modalService.open(ItemDetailComponent);
      //modalRef.componentInstance.data = yourData;  Předání dat do modální komponenty (pokud potřebujete).
    }
}
