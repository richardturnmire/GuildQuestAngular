import { Directive, Input, HostBinding, HostListener, OnInit, forwardRef } from '@angular/core';
import { ImageStateService } from '../image-state.service';
import { Display, Dimensions } from './token';

@Directive({
  selector: '[appProgressiveImageFallback]',
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src'
  },
  providers: [
    {
      provide: Dimensions,
      useExisting: forwardRef(() => ProgressiveImageFallbackDirective)
    }
  ]
})
export class ProgressiveImageFallbackDirective implements OnInit, Dimensions {
  @Input() src: string;

  @HostBinding( 'style.display' ) display = Display.flex;
  @HostBinding('style.width.%') width: number;
  @HostBinding('style.height.px') height: number;

  constructor( private imageState: ImageStateService ) { }

  updateUrl()
  {
    this.src = ( 'assets/Images/NoImageAvailable.jpg' );
  }

  ngOnInit() {
    this.imageState.isError$.subscribe(isError => {
      this.display = isError ? Display.flex : Display.none;
    });
  }
}
