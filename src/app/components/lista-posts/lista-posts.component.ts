import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.component';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  arrPosts: Post[];
  formulario: FormGroup;
  categoriaSeleccionada: string;

  //services
  postsService = inject(PostsService)

  constructor() {
    this.categoriaSeleccionada = '';
    this.arrPosts = [

    ];
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl(),
    })
  }

  ngOnInit() {

    const response = this.postsService.getAll()
    this.arrPosts = response

  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    if (categoria === 'todas') {
      this.arrPosts = this.postsService.getAll();
    } else {
      this.arrPosts = this.postsService.getPostsByCategory(categoria);
    }
  }




}
