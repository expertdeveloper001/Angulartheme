import { Component, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

class User {
  constructor(
    public id: number,
    public username: string,
    public name: string,
    public email: string,
    public role: string,
    public image: any,
    public isActive: string
  ) { }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns: any = [];
  userUsername: any;
  userName: any;
  userEmail: any;
  userRole: any;
  userPhone: any;
  userImage: any;
  useractive: string;
  rows: any[] = [];
  name = 'Angular';
  public imagePath;
  imgURL: any;
  selectedUser: any;
  userFlag: boolean;
  addUser: any;
  placement = 'bottom-right';
  imagepathdefault: any;
  addModal = null;
  editModal = null;
  viewModal = null;
  deleteModal = null;
  value: any;
  loadingIndicator: true;
  selected = [];
  temp = [];
  temp2 = this.rows;

  public config: PerfectScrollbarConfigInterface = { };

  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;
  
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

  /**
   * Constructor
   *
   * @param NgbModal  modal;
   * @param Renderer2  _renderer
   */
  constructor(
    private modal: NgbModal,
    private _renderer: Renderer2
    ) { }

    /**
     * OnInit
     */
  ngOnInit() {
    this.rows.push(new User(1, '12345', 'Scott Marsh', 'scott@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-5.png', 'online'));
    this.rows.push(new User(2, '12345', 'Russell Bry', 'russell@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-3.png', 'busy'));
    this.rows.push(new User(3, '12345', 'james john', 'john@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-1.png', 'away'));
    this.rows.push(new User(4, '12345', 'Cynth Tuck', 'tuck@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-4.png', 'busy'));
    this.rows.push(new User(5, '12345', 'Margi Govan', 'govan@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-6.png', 'online'));
    this.rows.push(new User(6, '12345', 'Eugene Wood', 'wood@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-9.png', 'busy'));
    this.rows.push(new User(7, '12345', 'Eric Marshall', 'eric@gmail.com', 'Customer',
      '../../../assets/images/portrait/small/avatar-s-7.png', 'online'));
  }

  /**
   * Add new User
   *
   * @param addTableDataModalContent      Id of the add User modal;
   */
  addTableDataModal(addTableDataModalContent) {
    this.addModal = this.modal.open(addTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });
    this.userFlag = true;
  }

  /**
   * Edit selected User row.
   *
   * @param editTableDataModalContent     Id of the edit User model.
   * @param row     The row which needs to be edited.
   */
  editTableDataModal(editTableDataModalContent, row) {
    this.selectedUser = Object.assign({}, row);
    this.editModal = this.modal.open(editTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });
    this.userFlag = false;
  }
  
  viewTableDataModal(viewTableDataModalContent, row) {
    this.selectedUser = Object.assign({}, row);
    this.viewModal = this.modal.open(viewTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });
    this.userFlag = false;
  }

  /**
   * Selected User
   *
   * @param selected      Selected User;
   */
  onSelectUser({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * Search user from user table
   *
   * @param event     Convert value uppercase to lowercase;
   */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2];
    this.temp = [...this.rows];
    console.log(rows);
	const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  /**
   * Choose user image
   *
   * @param event     Select user image;
   */
  preview(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.userImage = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  /**
   * Delete user row
   * @param row     Selected row for delete user
   */
  deleteRow(DangerModelContent, row) {
	this.selectedUser = Object.assign({}, row);
    this.deleteModal = this.modal.open(DangerModelContent, {
      windowClass: 'animated fadeInDown'
    });
    this.userFlag = false;
  }
  
  deleteUser(deleteForm: NgForm, id) {
	if (id !== '' && id !== undefined)
	{
		let index = 0;
		const temp = [...this.rows];
		for (const tempRow of temp) {
		  if (tempRow.id === id) {
			temp.splice(index, 1);
			this.deleteModal.close(deleteForm.resetForm);
			break;
		  }
		  index++;
		}
		this.rows = temp;
    }
  }
  
  /**
   * Update user details
   *
   * @param editForm      Edit form for values check
   * @param id      Id match to the selected row Id
   */
  onUpdate(editForm: NgForm, id) {
    for (const row of this.rows) {
      if (row.id === id && editForm.valid === true) {
        row.username = this.selectedUser['Username'];
        row.name = this.selectedUser['Name'];
        row.email = this.selectedUser['email'];
        row.role = this.selectedUser['Role'];
        this.editModal.close(editForm.resetForm);
        break;
      }
    }
  }

  /**
   * Delete selected user
   */
  deleteCheckedRow(DangerModelContent) {
	this.modal.open(DangerModelContent, { windowClass: 'animated fadeInDown' });
    let index = 0;
    const removedIndex = [];
    const temp = [...this.rows];
    for (const row of temp) {
      for (const selectedRow of this.selected) {
        if (row.id === selectedRow.id) {
          removedIndex.push(index);
        }
      }
      index++;
    }
    for (let i = removedIndex.length - 1; i >= 0; i--) {
      temp.splice(removedIndex[i], 1);
    }
    this.rows = temp;
    this.selected = [];
	this.userFlag = false;
  }

  /**
   * New user add to the table
   *
   * @param addForm     Add user form
   */
  addNewUser(addForm: NgForm) {
    if (this.userImage == null) {
      this.userImage = '../../../assets/images/portrait/small/default.png';
    } else {
      this.userImage = this.userImage;
    }

    if (this.useractive === undefined) {
      this.useractive = 'away';
    } else {
      this.useractive = this.useractive;
    }

    /**
     * Add user if valid addform value
     */
    if (addForm.valid === true) {
      this.rows.push(
        new User(
          this.rows.length + 1,
          this.userUsername,
          this.userName,
          this.userEmail,
          this.userRole,
          this.userImage,
          this.useractive
        )
      );
      this.rows = [...this.rows];
      addForm.reset();
      this.addModal.close(addForm.resetForm);
    }
  }

  /**
   * Set the phone number format
   */
  onFormat() {
    if (this.userFlag === true) {
      this.value = this.userPhone;
    } else if (this.userFlag === false) {
      this.value = this.selectedUser['phone'];
    }

    let country, city, number;

    switch (this.value.length) {
      case 6:
        country = 1;
        city = this.value.slice(0, 3);
        number = this.value.slice(3);
        break;

      case 7:
        country = this.value[0];
        city = this.value.slice(1, 4);
        number = this.value.slice(4);
        break;

      case 8:
        country = this.value.slice(0, 3);
        city = this.value.slice(3, 5);
        number = this.value.slice(5);
        break;

      default:
        return this.value;
    }
    if (country === 1) {
      country = '';
    }

    number = number.slice(0, 3) + '-' + number.slice(3);

    const no = '(' + city + ')' + '-' + number;
    if (this.userFlag === true) {
      this.userPhone = no;
    } else if (this.userFlag === false) {
      this.selectedUser['phone'] = no;
    }
  }

  /**
   * Sidebar open/close in responsive
   *
   * @param event     Sidebar open/close
   */
  sidebar(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
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
