import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent implements OnInit {
  constructor(private PostSvc: PostsService) {}

  activePosts!: iPost[];

  ngOnInit() {
    this.activePosts = this.PostSvc.activePost;
  }
}
