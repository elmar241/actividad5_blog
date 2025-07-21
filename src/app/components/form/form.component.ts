import { Component, EventEmitter, Output } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newNoticia: INew = {title:"", url:"", body:"", date:""}
  @Output() noticiaEmitida: EventEmitter<INew> = new EventEmitter()

  // función del click del formulario
  guardarNoticia(): void {
    if(this.newNoticia.title !== "" && this.newNoticia.url !== "" && this.newNoticia.body !== "" && this.newNoticia.date !== "") {
      // enviaremos al padre la noticia
      this.noticiaEmitida.emit(this.newNoticia)
      this.newNoticia = {title:"", url:"", body:"", date:""}
    } else {
      Swal.fire({
        title: "Campos Obligatorios",
        text: "Debes rellenar todos los campos",
        icon: "error"
      });
    }
  }
}
