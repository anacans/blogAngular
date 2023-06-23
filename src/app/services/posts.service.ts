import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.component';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [{
      titulo: 'Mi primer post',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      autor: 'Ana Caceres',
      fecha: '11/05/2023',
      categoria: 'viajes',
      imagen: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      titulo: 'Mi segundo post',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      autor: 'Ana Caceres',
      fecha: '11/05/2023',
      categoria: 'naturaleza',
      imagen: 'https://images.pexels.com/photos/3163927/pexels-photo-3163927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    ];
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
