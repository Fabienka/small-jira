import { AfterContentInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { Item } from '../items'
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from '../capitalize.pipe';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule,
    ItemDetailComponent,
    RouterModule,
    CapitalizePipe],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterContentInit {
      @Input() item!: Item;
      commentsCount = 0;
  
    constructor() {
    }
    ngAfterContentInit(): void {
      if (this.item) {
        this.commentsCount = this.item.comments.length;
      }
    }
    
}
