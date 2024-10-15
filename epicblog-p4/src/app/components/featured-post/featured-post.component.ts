import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../interfaces/ijsonresponse';
import { iPost } from '../../interfaces/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: '.app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.scss',
})
export class FeaturedPostComponent implements OnInit {
  posts!: iPost[];
  featuredPost!: iPost;

  constructor(private PostSvc: PostsService) {}

  ngOnInit() {
    this.posts = this.PostSvc.posts;
    this.featuredPost = this.PostSvc.featuredPost;
  }
}
