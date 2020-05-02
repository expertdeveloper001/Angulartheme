import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { InventoryComponent } from 'src/app/content/bulkimport/inventory/inventory.component';
import { PriceComponent } from 'src/app/content/bulkimport/price/price.component';
import { CustomersComponent } from 'src/app/content/bulkimport/customers/customers.component';
import { ManagerComponent } from 'src/app/content/bulkimport/manager/manager.component';
import { AssetsComponent } from 'src/app/content/bulkimport/assets/assets.component';
import { NewSpecialsComponent } from 'src/app/content/bulkimport/new-specials/new-specials.component';
import { EditNewSpecialsComponent } from 'src/app/content/bulkimport/new-specials/edit-new-specials/edit-new-specials.component';
import { SalespersonComponent } from 'src/app/content/bulkimport/salesperson/salesperson.component';
import { NewArrivalsComponent } from 'src/app/content/bulkimport/new-arrivals/new-arrivals.component';
//import { ManageImageSequenceComponent } from 'src/app/content/bulkimport/new-specials/manage-image-sequence/manage-image-sequence.component';
import { EditNewArrivalsComponent } from 'src/app/content/bulkimport/new-arrivals/edit-new-arrivals/edit-new-arrivals.component';
import { BulkimportComponent } from './bulkimport.component';
import { BulkimportRoutingModule } from './bulkimport-routing.module';


@NgModule({
  declarations: [ BulkimportComponent, InventoryComponent, PriceComponent, CustomersComponent, SalespersonComponent, ManagerComponent, AssetsComponent, NewSpecialsComponent, EditNewSpecialsComponent, NewArrivalsComponent, EditNewArrivalsComponent ],
  imports: [
    CommonModule,
	NgSelectModule,
	NgxDatatableModule,
	FormsModule,
	NgbModule,
	ReactiveFormsModule,
    BulkimportRoutingModule,
	NgMultiSelectDropDownModule.forRoot(),
	RouterModule.forChild([
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'price',
        component: PriceComponent
      },
	  {
        path: 'customers',
        component: CustomersComponent
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
    ])
  ],
  exports: [RouterModule]
})
export class BulkimportModule { }