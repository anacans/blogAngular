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



  async createPost(formValue: any): Promise<any> {
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
















}
