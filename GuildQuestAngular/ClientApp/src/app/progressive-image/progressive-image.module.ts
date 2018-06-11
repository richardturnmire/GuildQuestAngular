import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgressiveImagePlaceholderDirective } from './directives/progressive-image-placeholder.directive';
import { ProgressiveImageDirective } from './directives/progressive-image.directive';
import { ProgressiveImageComponent } from './progressive-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProgressiveImageComponent,
    ProgressiveImagePlaceholderDirective,
    ProgressiveImageDirective
  ],
  exports: [
    ProgressiveImageComponent,
    ProgressiveImagePlaceholderDirective,
    ProgressiveImageDirective
  ]
})
export class ProgressiveImageModule {}
