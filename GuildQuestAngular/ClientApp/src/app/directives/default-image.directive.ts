import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]',
  host: {
    '(error)': 'updateUrl()',
   '[src]': 'src'
  }
})


export class DefaultImageDirective {
  @Input() appDefaultImage;
  @Input() src: string;

  constructor(private el: ElementRef) {
    
  }
  
  updateUrl() {
    this.src = ('assets/Images/NoImageAvailable.jpg');
  }
}
