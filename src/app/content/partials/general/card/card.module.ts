import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardDirective } from 'src/app/_directives/card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, CardDirective],
  exports: [CardComponent]
})
export class CardModule { }
