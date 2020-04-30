import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from 'src/app/content/bulkimport/inventory/inventory.component';
import { BulkimportComponent } from './bulkimport.component';

const routes: Routes = [
  {
    path: '',
    component: BulkimportComponent,
    data: {
      title: 'Bulk Import'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkimportRoutingModule { }