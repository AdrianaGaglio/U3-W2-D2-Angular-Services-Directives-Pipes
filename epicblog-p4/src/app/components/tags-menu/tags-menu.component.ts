import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tags-menu',
  templateUrl: './tags-menu.component.html',
  styleUrl: './tags-menu.component.scss',
})
export class TagsMenuComponent implements OnInit {
  constructor(private PostSvc: PostsService) {}

  @Output() onClickOutput = new EventEmitter<string>();

  tags!: string[];
  tag!: string;

  isClicked!: boolean;
  target: string = '';

  ngOnInit() {
    this.tags = this.PostSvc.tags;
  }

  emitTag(tag: string) {
    this.target = tag;
    return this.onClickOutput.emit(tag);
  }
}
