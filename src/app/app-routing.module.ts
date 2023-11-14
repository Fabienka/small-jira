
import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found'
  }
];


export default routeConfig;
