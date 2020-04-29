import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import {  HighlightModule,  HIGHLIGHT_OPTIONS,  HighlightOptions } from 'ngx-highlightjs';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';
import { GridComponent } from './grid/grid.component';
import { TextutilitiesComponent } from './textutilities/textutilities.component';
import { SyntexhighlighterComponent } from './syntexhighlighter/syntexhighlighter.component';
import { HelperclassesComponent } from './helperclasses/helperclasses.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    HighlightModule,
    MatchHeightModule,
    BreadcrumbModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'textutilities',
        component: TextutilitiesComponent
      },
      {
        path: 'syntexhighlighter',
        component: SyntexhighlighterComponent
      },
      {
        path: 'helperclasses',
        component: HelperclassesComponent
      }
    ]),
  ],
  declarations: [ GridComponent, TypographyComponent, HelperclassesComponent, TextutilitiesComponent, SyntexhighlighterComponent
 ],
  providers : [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: <HighlightOptions>{
          lineNumbers: true
        }
      }
    }
  ],
  exports: [RouterModule]
})
export class UIContentModule { }
