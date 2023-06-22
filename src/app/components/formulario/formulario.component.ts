import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { PostsService } from 'src/app/services/posts.service';

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
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl(),
    });

  }

  async onSubmit() {
    try {
      const response = await this.postService.createPost(this.formulario.value);
      console.log('Post creado:', response);

    } catch (error) {
      console.error('Error al crear el post:', error);

    }
  }






}
