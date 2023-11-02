import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,
            ItemComponent,
          ItemDetailComponent],
  template: `
  <div class="item-list-container">
    
    <ng-template ngFor let-item [ngForOf]=listArray let-i="index" >
    <div class="row">
      <app-item></app-item>
    </div>
    </ng-template>
    item-list works!
  </div>
  `,
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
    listArray = [1,2,3,4,5,6,7,8,9,10];

}
