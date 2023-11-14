import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import routeConfig from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [ 
  
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    ItemListComponent
  ],
  providers: [routeConfig],
  bootstrap: []
})
export class AppModule { }
