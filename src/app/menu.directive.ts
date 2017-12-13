import {Directive, HostBinding, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {
  toggled = false;
  @HostListener('click') toggle() {
    if (!this.toggled) {
      this.document.body.classList.add('menu-open');
      this.document.body.classList.add('vertical-overlay-menu');
      this.document.body.classList.remove('vertical-menu');
      this.toggled = !this.toggled;
    } else {
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.remove('vertical-overlay-menu');
      this.toggled = !this.toggled;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

}
