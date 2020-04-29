import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TodoComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TodoService } from 'src/app/_api/todo/todo.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent
      }
    ])
  ],
  declarations: [TodoComponent],
  providers: [TodoService]
})
export class TodosModule { }
