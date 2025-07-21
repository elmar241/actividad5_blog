import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-new-card',
  imports: [FormsModule],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {
  @Input() noticia: INew = {title:"", url:"", body:"", date:""}
}
