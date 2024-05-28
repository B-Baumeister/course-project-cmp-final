import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }

  @HostListener('click') click(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  @HostBinding('style.backgroundColor') backgroundColor: String;

  /*   @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    ); */
}
/*  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    ); */
