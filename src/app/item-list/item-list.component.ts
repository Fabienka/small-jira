import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { PostService } from '../app.post-service';
import { Item} from '../items'
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
    ItemDetailComponent,
    RouterModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  postService: PostService = inject(PostService);
  itemList: Item[] = [];
  
  constructor(
    private router: Router
  ) {
    this.getData();
  }
  async getData() {
    try {
      this.itemList = await this.postService.getData();
      console.log(this.itemList)
    } catch (error) {
      this.router.navigate(['/not-found']);
      console.error("Chyba při získávání dat:", error);
    }
  }
}
