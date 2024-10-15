import { Component, Input, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.scss',
})
export class RelatedPostsComponent implements OnInit {
  constructor(private PostSvc: PostsService) {}

  posts!: iPost[];
  relatedPosts: iPost[] = [];

  ngOnInit() {
    this.posts = this.PostSvc.posts;
    const tags: string[] = this.PostSvc.featuredPost.tags;
    // per ogni post estraggo i post con tag correlati
    const tempPosts: iPost[] = [];
    this.posts.forEach((post) => {
      tags.forEach((tag, i) => {
        if (post.tags[i] === tag && post.id !== this.PostSvc.featuredPost.id) {
          tempPosts.push(post);
        }
      });
    });
    for (let i = 0; i < 4; i++) {
      const current = tempPosts[i];
      if (this.relatedPosts.indexOf(current) === -1) {
        this.relatedPosts.push(current);
      }
    }
  }
}
