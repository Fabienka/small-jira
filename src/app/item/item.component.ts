import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent],
  template: `
    <div class="item-card" (click)="openModal()">
      <h4 class="item-card-title">{{title}} item component </h4>
      <span class="item-card-author"> {{author}}</span>
      <div class="item-card-description"> {{description}} </div>
   </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    title = "Titulek";
    author = "author"
    description = "Lorem ipsum dolor sit amet"
    constructor(private modalService: NgbModal) {}

    openModal() {
      let modalRef = this.modalService.open(ItemDetailComponent);
      //modalRef.componentInstance.data = yourData;  Předání dat do modální komponenty (pokud potřebujete).
    }
}
