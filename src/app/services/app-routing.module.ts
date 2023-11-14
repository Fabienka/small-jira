
import { Routes } from '@angular/router';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { ItemDetailComponent } from '../components/item-detail/item-detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

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
