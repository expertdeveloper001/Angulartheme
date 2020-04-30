import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UiSwitchModule } from 'ngx-ui-switch';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
//import { NgSelectModule } from '@ng-select/ng-select';
import { BlockUIModule } from 'ng-block-ui';
//import { CustomFormsModule } from 'ngx-custom-validators';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    //UiSwitchModule,
	MatchHeightModule,
    //NgSelectModule,
    BreadcrumbModule,
    NgbModule,
    //CustomFormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'inventory',
        component: InventoryComponent
      },
	  {
        path: 'pricing',
        component: PricingComponent
      },
	  {
        path: 'customer',
        component: CustomerComponent
      },
    ])
  ],
  declarations: [InventoryComponent, PricingComponent, CustomerComponent],
  exports: [RouterModule]
})
export class BulkImportModule { }
