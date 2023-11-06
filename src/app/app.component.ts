import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, ItemListComponent]
})
export class AppComponent {
  title = 'small-jira';
}
