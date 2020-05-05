import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { InventoryComponent } from './inventory/inventory.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from 'src/app/content/bulk-import/manager/manager.component';
import { AssetsComponent } from 'src/app/content/bulk-import/assets/assets.component';
import { MappedCustomerComponent } from 'src/app/content/bulk-import/mapped-customer/mapped-customer.component';
import { NewSpecialsComponent } from 'src/app/content/bulk-import/new-specials/new-specials.component';
import { EditNewSpecialsComponent } from 'src/app/content/bulk-import/new-specials/edit-new-specials/edit-new-specials.component';
import { SalespersonComponent } from 'src/app/content/bulk-import/salesperson/salesperson.component';
import { NewArrivalsComponent } from 'src/app/content/bulk-import/new-arrivals/new-arrivals.component';
//import { ManageImageSequenceComponent } from 'src/app/content/bulkimport/new-specials/manage-image-sequence/manage-image-sequence.component';
import { EditNewArrivalsComponent } from 'src/app/content/bulk-import/new-arrivals/edit-new-arrivals/edit-new-arrivals.component';
import { FeaturedBrandsComponent } from 'src/app/content/bulk-import/featured-brands/featured-brands.component';
import { EditFeaturedBrandsComponent } from 'src/app/content/bulk-import/featured-brands/edit-featured-brands/edit-featured-brands.component';
import { FeaturedItemsComponent } from 'src/app/content/bulk-import/featured-items/featured-items.component';
import { EditFeaturedItemsComponent } from 'src/app/content/bulk-import/featured-items/edit-featured-items/edit-featured-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
	NgSelectModule,
	MatchHeightModule,
    BreadcrumbModule,
    NgbModule,
	NgxDatatableModule,
    ReactiveFormsModule,
	NgMultiSelectDropDownModule.forRoot(),
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
	  {
        path: 'salesperson',
        component: SalespersonComponent
      },
	  {
        path: 'manager',
        component: ManagerComponent
      },
	  {
        path: 'assets',
        component: AssetsComponent
      },
	  {
        path: 'mapped-customer',
        component: MappedCustomerComponent
      },
	  {
        path: 'new-specials',
        component: NewSpecialsComponent
      },
	  {
        path: 'new-specials/edit-new-specials',
        component: EditNewSpecialsComponent
      },
	  // {
        // path: 'new-specials/manage-image-sequence',
        // component: ManageImageSequenceComponent
      // },
	  {
        path: 'new-arrivals',
        component: NewArrivalsComponent
      },
	  {
        path: 'new-arrivals/edit-new-arrivals',
        component: EditNewArrivalsComponent
      },
	  {
        path: 'featured-brands',
        component: FeaturedBrandsComponent
      },
	  {
        path: 'featured-brands/edit-featured-brands',
        component: EditFeaturedBrandsComponent
      },
	  {
        path: 'featured-items',
        component: FeaturedItemsComponent
      },
	  {
        path: 'featured-items/edit-featured-items',
        component: EditFeaturedItemsComponent
      },
    ])
  ],
  declarations: [InventoryComponent, PricingComponent, CustomerComponent, SalespersonComponent, ManagerComponent, AssetsComponent, MappedCustomerComponent, NewSpecialsComponent, EditNewSpecialsComponent, NewArrivalsComponent, EditNewArrivalsComponent, FeaturedBrandsComponent, EditFeaturedBrandsComponent, FeaturedItemsComponent, EditFeaturedItemsComponent],
  exports: [RouterModule]
})
export class BulkImportModule { }
