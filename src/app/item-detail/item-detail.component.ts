import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    
      <!-- Modal -->     
        <div class="modal-dialog" role="document">
          <div>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            </div>
            <div class="modal-body">
              This is body of modal window
            </div>
          </div>
        </div>

  `,
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  

}
