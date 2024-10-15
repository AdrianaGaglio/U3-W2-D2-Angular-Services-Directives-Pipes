import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomcolor]',
})
export class RandomcolorDirective {
  constructor(private ref: ElementRef) {}

  randomColor!: string;

  ngOnInit() {
    this.randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.ref.nativeElement.style.border = `1px solid #${this.randomColor}`;
    this.ref.nativeElement.style.color = `#${this.randomColor}`;
  }
}
