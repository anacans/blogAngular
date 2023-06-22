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

  createPost(formValue: any) {

  }

  getAll() {

  }
}
