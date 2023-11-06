import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import routeConfig from './app-routing.module';

@NgModule({
  declarations: [
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
