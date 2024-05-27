import {
  Directive,
  HostBinding,
  HostListener,
  Renderer2,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DrowdownDirective {
  /*   private isShown: boolean = false; */
  @Input() set appDropdown(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      /*  this.vcRef.clear(); */
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  /*   @HostBinding('class.open') isOpen = false; */
  /*  @HostListener('click') toggleOpen() {
    if (this.isShown) {
      this.renderer.(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    }
    this.isShown = !this.isShown; */

  /* this.isOpen = !this.isOpen; */
}
