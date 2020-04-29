import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    PerfectScrollbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmailComponent
      }
    ])
  ],
  declarations: [EmailComponent]
})
export class EmailModule { }
