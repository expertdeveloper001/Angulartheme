import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { TodoService } from 'src/app/_api/todo/todo.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

declare let require: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  initialData = require('../../../../assets/data/application/todo.json');

  private demoUserEmail = 'john@pixinvent.com';
  todo: FormGroup;
  submitted = false;
  todoDisplayList: any[] = [];
  keyword: string;
  todoTitle = '';
  todoType: 'secondary';
  todoDescription = '';
  selectedTodoTypeText = '';
  selectedTodoTypeValue = '';
  isShown = true;
  items: Array<any>;
  selectedItem: any;
  completedTodo = false;
  id: any;
  temp: any;
  loader = true;
  loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  todos: any;

  /**
   * Constructor
   *
   * @param NgbModal              modal
   * @param FormBuilder           formBuilder
   * @param Renderer2             _renderer
   * @param TodoService           firebaseService
   * @param AngularFirestore      firestore
   * @param ToastrService         toastr
   */
  constructor(private modal: NgbModal,
    private formBuilder: FormBuilder,
    private _renderer: Renderer2,
    private firebaseService: TodoService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) {
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.loader = true;
    this.resetForm();
    this.todos = [];

    if (this.loggedInUser.email === this.demoUserEmail) {
      // To load default todo for demo account
      this.getDemoAccTodos().then(todos => {
        if (todos.length === 0) {
          this.addDemoAccountTodos().then(result => {
            if (result) {
              this.loadTodos();
            }
          });
        } else {
          this.loadTodos();
        }
      });
    } else {
      this.loadTodos();
    }

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      type: [''],
      description: ['', Validators.required]
    });

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      type: [''],
      description: ['', Validators.required]
    });
  }

  // Load TODO of user
  loadTodos () {
    this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
      this.todos = todos.map(item => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        };
      });
      this.temp = this.todos;
      this.loader = false;
    });
  }

  /**
   * Get the add todo Form value
   */
  get add() {
    return this.todo.controls;
  }

  /**
   * Get the update todo Form value
   */
  get update() {
    return this.todo.controls;
  }

  /**
   * Reset form value
   *
   * @param form      Form fields with previous value
   */
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  addDemoAccountTodos () {
    const dataPromise = new Promise((resolve, reject) => {
      const promises = [];
      // Add default TODO for demo account
      for (let i = 0; i < this.initialData.length; i++) {
        const promise = this.firestore.collection('todo').add({
          title: this.initialData[i].title,
          description: this.initialData[i].description,
          badge: this.initialData[i].badge,
          type: this.initialData[i].type,
          completed: this.initialData[i].completed,
          isDeleted: this.initialData[i].isDeleted,
          createdDate: new Date(),
          uid: this.loggedInUser.uid
        });
        promises.push(promise);
      }
      forkJoin(promises).subscribe(results => {
        resolve(true);
      });
    });
    return dataPromise;
  }

  /**
   * Initial todo display
   */
  getDemoAccTodos(): Promise<any> {
    const dataPromise = new Promise((resolve, reject) => {
      this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
        resolve(todos);
      });
    });
    return dataPromise;
  }

  /**
   * Add new todo
   */
  onSubmit() {
    this.submitted = true;

    if (this.todo.invalid) {
      return;
    } else if (this.todo.valid) {
      this.todo.setValue({
        uid: this.loggedInUser.uid,
        title: this.todo.value.title,
        description: this.todo.value.description,
        type: this.selectedTodoTypeValue,
        completed: false,
        isDeleted: false,
        createdDate: new Date(),
        badge: this.selectedTodoTypeText
      });

      this.firebaseService.createTodo(this.todo.value).subscribe(res => {
        this.toastr.success('Added', 'Todo Created Successfully.', { timeOut: 500, closeButton: true });
      }, (err) => {
        this.toastr.error('Error', 'Add Todo Error.', { timeOut: 500, closeButton: true });
      });
      this.dismissModal();
      this.submitted = false;
    }
  }

  /**
   * Update todo
   *
   * @param value     Form field values
   * @param id        todo id
   */
  onUpdate(id, value) {
    this.submitted = true;

    if (this.todo.invalid) {
      return;
    } else if (this.todo.valid) {
      this.todo.setValue({
        uid: this.loggedInUser.uid,
        title: value.title,
        description: value.description,
        type: this.selectedTodoTypeValue,
        completed: value.completed,
        isDeleted: false,
        createdDate: this.selectedItem.createdDate,
        badge: this.selectedTodoTypeText
      });

      this.firebaseService.updateTODO(id, this.todo.value)
        .subscribe(res => {
          this.toastr.success('Update', 'Todo Updated Successfully.', { timeOut: 500, closeButton: true });
        }, (err) => {
          this.toastr.error('Error', 'Todo Update Error!', { timeOut: 500, closeButton: true });
        });
      this.dismissModal();
      this.submitted = false;
    }
  }

  /**
   * Delete todo
   *
   * @param id      todo id
   */
  onDelete(id: string) {

    this.firebaseService.deleteTodo(id)
      .then(res => {
        this.toastr.success('Deleted', 'Todo Deleted Successfully!', { timeOut: 500, closeButton: true });
      }, (err) => {
        this.toastr.error('Error', 'Todo Delete Error!', { timeOut: 500, closeButton: true });
      }
      );
  }

  /**
   * filter task
   */
  search(term) {
    const searchTerm = term.currentTarget.value;
    if (searchTerm !== '') {
      this.todos = this.todos.filter(result => {
        if (result && searchTerm) {
          if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
            result.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.todos = this.temp;
    }
  }

  /**
   * Open add todo modal
   *
   * @param content     Add todo modal id
   */
  open(content) {
    this.selectedTodoTypeValue = '';
    this.selectedTodoTypeText = '';
    this.resetForm();
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: '',
      description: '',
      type: '',
      completed: false,
      isDeleted: false,
      createdDate: new Date(),
      badge: ''
    });
    this.modal.open(content);
  }

  /**
   * Open edit todo modal
   *
   * @param editContent    edit todo modal id
   * @param item           edit todo modal values
   */
  editModal(editContent, value) {
    this.resetForm();
    this.selectedItem = value;
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: this.selectedItem.title,
      description: this.selectedItem.description,
      type: this.selectedItem.type,
      completed: value.completed,
      isDeleted: false,
      badge: this.selectedItem.badge,
      createdDate: value.createdDate
    });
    this.modal.open(editContent);
  }

  /**
   * Get text and value
   *
   * @param event     Dropdown event
   */
  getSelectedTODOTypeText(event: Event) {
    this.selectedTodoTypeText = event.target['options'][event.target['options'].selectedIndex].text;
    this.selectedTodoTypeValue = event.target['options'][event.target['options'].selectedIndex].value;
  }

  completeTODO(data) {
    if (data.completed) {
      data.completed = false;
    } else {
      data.completed = true;
    }
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: data.title,
      description: data.description,
      type: data.type,
      completed: data.completed,
      isDeleted: data.isDeleted,
      createdDate: data.createdDate,
      badge: data.badge
    });

    this.firebaseService.updateTODO(data.id, this.todo.value)
      .subscribe(res => {
        if (this.todo.value.completed === true) {
          this.toastr.success('Success', 'Todo Completed.', { timeOut: 500, closeButton: true });
        } else {
          this.toastr.success('Success', 'Todo Updated.', { timeOut: 500, closeButton: true });
        }
      }, (err) => {
        this.toastr.error('Error', 'Something went wrong!', { timeOut: 500, closeButton: true });
      });
  }

  /**
   * Dismiss Modal
   */
  public dismissModal() {
    this.modal.dismissAll(this.resetForm);
  }

  /**
  * Sidebar open/close in responsive
  *
  * @param event     Sidebar open/close
  */
  sidebar(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'feather ft-menu font-large-1') {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
    }
  }

  /**
   * Overlay add/remove fuction in responsive
   *
   * @param event     Overlay click event
   */
  contentOverlay(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'content-overlay show') {
      this._renderer.removeClass(toggleIcon, 'show');
      this._renderer.removeClass(toggle, 'show');
    }
  }
}
