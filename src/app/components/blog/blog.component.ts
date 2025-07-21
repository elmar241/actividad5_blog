import { Component } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NEWS } from '../../db/noticias.db';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrayNews: INew[] = NEWS
  newNoticia: INew = {title:"", url:"", body:"", date:""}

  cargarContenido(): string{
    let html = ""
    for (let myNew of this.arrayNews) {
      html += `<article class="new">
                <figure>
                    <img src="${myNew.url}" 
                    alt="${myNew.title}">
                </figure>
                <h3>${myNew.title}</h3>
                <div>
                    ${myNew.body}
                </div>
                <p>Fecha: ${myNew.date}</p>
            </article>`
    }

    return html
  }

  // función del click del formulario
  guardarNoticia(): void {
    if(this.newNoticia.title !== "" && this.newNoticia.url !== "" && this.newNoticia.body !== "" && this.newNoticia.date !== "") {
      this.arrayNews.push(this.newNoticia)
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
