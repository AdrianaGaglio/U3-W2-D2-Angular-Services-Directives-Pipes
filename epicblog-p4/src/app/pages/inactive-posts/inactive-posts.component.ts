import { Component } from '@angular/core';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { iPost } from '../../interfaces/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  constructor(private PostSvc: PostsService) {}

  inactivePosts!: iPost[];

  ngOnInit() {
    this.inactivePosts = this.PostSvc.inactivePost;
  }
}
