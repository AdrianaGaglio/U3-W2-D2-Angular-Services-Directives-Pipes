import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts!: iPost[];

  constructor(private postSvc: PostsService) {}

  ngOnInit() {
    this.posts = this.postSvc.posts;
  }

  show: boolean = false;

  showForm() {
    this.show = !this.show;
  }

  filterPost(tag: string) {
    this.posts = this.postSvc.getFilteredPost(tag);
  }
}
