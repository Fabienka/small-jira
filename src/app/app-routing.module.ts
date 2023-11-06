
import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ItemListComponent,
    title: 'Home page'
  },
  {
    path: 'detail/:id',
    component: ItemDetailComponent,
    title: 'Details'
  }
];


export default routeConfig;
