import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: iPost;

  @Output() onChangeBtn = new EventEmitter<boolean>();
}
