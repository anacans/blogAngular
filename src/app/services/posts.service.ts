import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.component';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
  }



  createPost(formValue: Post): Post {
    const newPost: Post = {
      titulo: formValue.titulo,
      texto: formValue.texto,
      autor: formValue.autor,
      fecha: formValue.fecha,
      categoria: formValue.categoria,
      imagen: formValue.imagen,
    };

    this.arrPosts.push(newPost);

    return newPost; // devuelve el nuevo post creado
  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  getPostsByCategory(categoria: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === categoria);
  }














}
