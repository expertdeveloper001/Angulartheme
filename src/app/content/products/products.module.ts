import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableFooterModule } from 'ngx-datatable-footer';
import { ProductsComponent } from './products.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    BreadcrumbModule,
    NgSelectModule,
    FormsModule,
    ClipboardModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    NgxDatatableFooterModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      },
      ]),
  ],
  declarations: [ProductsComponent],
  exports: [RouterModule]
})
export class ProductsModule { }
