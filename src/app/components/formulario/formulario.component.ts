import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  //services
  postService = inject(PostsService);


  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
    });

  }

  onSubmit() {
    try {
      const response = this.postService.createPost(this.formulario.value);
      console.log('Post creado:', response);

    } catch (error) {
      console.error('Error al crear el post:', error);

    }
    this.formulario.reset()
  }

  onClick() {
    Swal.fire('Post guardado correctamente')
  }

  checkError(campo: string, error: string) {
    return this.formulario.get(campo)?.hasError(error) && this.formulario.get(campo)?.touched
  }
}







