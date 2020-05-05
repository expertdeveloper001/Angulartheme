import { Component, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public image: any,
    public isFavorite: boolean,
    public isActive: string,
  ) { }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns: any = [];
  contactName: any;
  contactEmail: any;
  contactPhone: any;
  contactImage: any;
  contactFavorite: boolean;
  contactactive: string;
  deleteUser:any;
  deleteCheckUser:any;
  rows: any[] = [];
  rows2: any[] = [];  
  rows3: any[] = [];  
  rows4: any[] = [];  
  rows5: any[] = [];
  deleteRowData: any = []; 
  sarchBox1:any;  
  sarchBox2:any;  
  sarchBox3:any;  
  sarchBox4:any;  
  sarchBox5:any;  
  name = 'Angular';
  public imagePath;
  imgURL: any;
  selectedContact: any;
  contactFlag: boolean;
  addContact: any;
  placement = 'bottom-right';
  imagepathdefault: any;
  addModal = null;
  editModal = null;
  value: any;
  loadingIndicator: true;
  selected = [];
  temp = [];  
  tempAdmin = [];  
  tempCustomer = [];  
  tempSp = [];  
  tempManager = [];  
  temp2 = this.rows;
  temp2Admin = this.rows2;
  temp2Customer = this.rows3;
  temp2Sp = this.rows4;
  temp2Manager = this.rows5;
  singlebasicSelected: any;
  checkAll: any ;
  deleteUserColumn: any;
  viewPage:any;
  selectedUser:any;
  viewModal:any;

  public config: PerfectScrollbarConfigInterface = { };
  //public singleSelectArray = selectData.singleSelectArray;
  
  @BlockUI('basicModals') blockUIBasicModals: NgBlockUI;
  @BlockUI('modalThemes') blockUIModalThemes: NgBlockUI;
  
  @ViewChild('ng-select') ngSelect;
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
    this.rows.push(new Contact(1, 'Scott Marsh', 'scott@gmail.com', '(954)-654-5641',
      '../../../assets/images/portrait/small/avatar-s-5.png', false, 'online'));
    this.rows.push(new Contact(2, 'Russell Bry', 'russell@gmail.com', '(235)-654-5642',
      '../../../assets/images/portrait/small/avatar-s-3.png', false, 'busy'));
    this.rows.push(new Contact(3, 'james john', 'john@gmail.com', '(125)-654-5643',
      '../../../assets/images/portrait/small/avatar-s-1.png', true, 'away'));
    this.rows.push(new Contact(4, 'Cynth Tuck', 'tuck@gmail.com', '(974)-654-5644',
      '../../../assets/images/portrait/small/avatar-s-4.png', false, 'busy'));
    this.rows.push(new Contact(5, 'Margi Govan', 'govan@gmail.com', '(954)-654-5645',
      '../../../assets/images/portrait/small/avatar-s-6.png', true, 'online'));
    this.rows.push(new Contact(6, 'Eugene Wood', 'wood@gmail.com', '(987)-654-5646',
      '../../../assets/images/portrait/small/avatar-s-9.png', false, 'busy'));
    this.rows.push(new Contact(7, 'Eric Marshall', 'eric@gmail.com', '(545)-654-5647',
      '../../../assets/images/portrait/small/avatar-s-7.png', false, 'online'));
	  
	this.rows2.push(new Contact(1, 'Scott Marsh', 'scott@gmail.com', '(954)-654-5641',
      '../../../assets/images/portrait/small/avatar-s-5.png', false, 'online'));
    this.rows2.push(new Contact(2, 'Russell Bry', 'russell@gmail.com', '(235)-654-5642',
      '../../../assets/images/portrait/small/avatar-s-3.png', false, 'busy'));
	  
	this.rows3.push(new Contact(3, 'Scott Marsh', 'scott@gmail.com', '(954)-654-5641',
      '../../../assets/images/portrait/small/avatar-s-5.png', false, 'online'));
    this.rows3.push(new Contact(4, 'Russell Bry', 'russell@gmail.com', '(235)-654-5642',
      '../../../assets/images/portrait/small/avatar-s-3.png', false, 'busy'));
	  
	this.rows4.push(new Contact(1, 'Eugene Wood', 'wood@gmail.com', '(987)-654-5646',
      '../../../assets/images/portrait/small/avatar-s-9.png', false, 'busy'));
    this.rows4.push(new Contact(2, 'Eric Marshall', 'eric@gmail.com', '(545)-654-5647',
      '../../../assets/images/portrait/small/avatar-s-7.png', false, 'online'));
	  
	this.rows5.push(new Contact(1, 'Eugene Wood', 'wood@gmail.com', '(987)-654-5646',
      '../../../assets/images/portrait/small/avatar-s-9.png', false, 'busy'));
    this.rows5.push(new Contact(2, 'Eric Marshall', 'eric@gmail.com', '(545)-654-5647',
      '../../../assets/images/portrait/small/avatar-s-7.png', false, 'online'));
  
   // this.singlebasicSelected = this.singleSelectArray[0].item_text;

  }

  /**
   * Add new contact
   *
   * @param addTableDataModalContent      Id of the add contact modal;
   */
  addTableDataModal(addTableDataModalContent) {
    this.addModal = this.modal.open(addTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });
    this.contactFlag = true;
  }
  
  /**
   * Model for delete.
   *
   *
   */
  DeleteUserModel(DeleteUser, row, value) {
	this.deleteRowData = row;
	this.deleteUserColumn = value;
    this.deleteUser = this.modal.open(DeleteUser, { windowClass: 'animated fadeInDown' });
  }
  
  viewTableDataModal(viewTableDataModalContent, row, value) {
    this.selectedUser = Object.assign({}, row);
	this.viewPage = value;
    this.viewModal = this.modal.open(viewTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });

  }
  /**
   * Model for delete.
   *
   *
   */
  DeleteCheckUserModel(DeleteCheckUser, value) {
	this.checkAll = value;
    this.deleteCheckUser = this.modal.open(DeleteCheckUser, { windowClass: 'animated fadeInDown' });
  }

  /**
   * Edit selected contact row.
   *
   * @param editTableDataModalContent     Id of the edit contact model.
   * @param row     The row which needs to be edited.
   */
  editTableDataModal(editTableDataModalContent, row) {
    this.selectedContact = Object.assign({}, row);
    this.editModal = this.modal.open(editTableDataModalContent, {
      windowClass: 'animated fadeInDown'
    });
    this.contactFlag = false;
  }

  /**
   * Selected contact
   *
   * @param selected      Selected contact;
   */
  onSelectContact({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * Search contact from contact table
   *
   * @param event     Convert value uppercase to lowercase;
   */
  updateFilter(event, value) {
    const val = event.target.value.toLowerCase();
	const tab = value;

	if(tab === 'all'){
		this.sarchBox1 = val;
		this.rows = [...this.temp2];
		this.temp = [...this.rows];
		const temp = this.rows.filter(function (d) {
		  return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows = temp;
	}

	if(tab === 'admin'){
		this.sarchBox2 = val;
		this.rows2 = [...this.temp2Admin];
		this.tempAdmin = [...this.rows2];
		const temp = this.rows2.filter(function (d) {
		  return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows2 = temp;
	}
	
	if(tab === 'customer'){
		this.sarchBox3 = val;
		this.rows3 = [...this.temp2Customer];
		this.tempCustomer = [...this.rows3];
		const temp = this.rows3.filter(function (d) {
		  return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows3 = temp;
	}
	
	if(tab === 'sp'){
		this.sarchBox4 = val;
		this.rows4 = [...this.temp2Sp];
		this.tempSp = [...this.rows4];
		const temp = this.rows4.filter(function (d) {
		  return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows4 = temp;
	}
	
	if(tab === 'manager'){
		this.sarchBox5 = val;
		this.rows5 = [...this.temp2Manager];
		this.tempManager = [...this.rows5];
		const temp = this.rows5.filter(function (d) {
		  return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows5 = temp;
	}
    //this.table.offset = 0;
  }

  /**
   * Choose contact image
   *
   * @param event     Select contact image;
   */
  preview(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.contactImage = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  /**
   * Delete contact row
   * @param row     Selected row for delete contact
   */
  deleteRow() {
	let index = 0;
	
	if(this.deleteUserColumn === 'all'){
		const temp = [...this.rows];
		for (const tempRow of temp) {
		  if (tempRow.id === this.deleteRowData.id) {
			temp.splice(index, 1);
			break;
		  }
		  index++;
		}
		this.deleteUser.close();
		this.rows = temp;
	}
	
	if(this.deleteUserColumn === 'admin'){
		const temp = [...this.rows2];
		for (const tempRow of temp) {
		  if (tempRow.id === this.deleteRowData.id) {
			temp.splice(index, 1);
			break;
		  }
		  index++;
		}
		this.deleteUser.close();
		this.rows2 = temp;
	}
	
	if(this.deleteUserColumn === 'customer'){
		const temp = [...this.rows3];
		for (const tempRow of temp) {
		  if (tempRow.id === this.deleteRowData.id) {
			temp.splice(index, 1);
			break;
		  }
		  index++;
		}
		this.deleteUser.close();
		this.rows3 = temp;
	}
	
	if(this.deleteUserColumn === 'sp'){
		const temp = [...this.rows4];
		for (const tempRow of temp) {
		  if (tempRow.id === this.deleteRowData.id) {
			temp.splice(index, 1);
			break;
		  }
		  index++;
		}
		this.deleteUser.close();
		this.rows4 = temp;
	}
	
	if(this.deleteUserColumn === 'manager'){
		const temp = [...this.rows5];
		for (const tempRow of temp) {
		  if (tempRow.id === this.deleteRowData.id) {
			temp.splice(index, 1);
			break;
		  }
		  index++;
		}
		this.deleteUser.close();
		this.rows5 = temp;
	}
    this.deleteUserColumn = '';
	this.deleteRowData = [];
  }

  /**
   * Update contact details
   *
   * @param editForm      Edit form for values check
   * @param id      Id match to the selected row Id
   */
  onUpdate(editForm: NgForm, id) {
    for (const row of this.rows) {
      if (row.id === id && editForm.valid === true) {
        row.name = this.selectedContact['name'];
        row.email = this.selectedContact['email'];
        row.phone = this.selectedContact['phone'];
        this.editModal.close(editForm.resetForm);
        break;
      }
    }
  }

  /**
   * Contact changed to favorite or non-favorite
   *
   * @param row     Row of the favorite contact
   */
  favoriteChange(row) {
    if (row.isFavorite) {
      row.isFavorite = row.isFavorite ? false : true;
    } else {
      row.isFavorite = true;
    }
  }

  /**
   * Delete selected contact
   */
  deleteCheckedRow() {
    let index = 0;
    const removedIndex = [];
	
	if(this.checkAll === 'all'){
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
	}
	
	if(this.checkAll === 'admin'){
		const temp = [...this.rows2];
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
		this.rows2 = temp;
	}
	
	if(this.checkAll === 'customer'){
		const temp = [...this.rows3];
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
		this.rows3 = temp;
	}
	
	if(this.checkAll === 'sp'){
		const temp = [...this.rows4];
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
		this.rows4 = temp;
	}
	
	if(this.checkAll === 'manager'){
		const temp = [...this.rows5];
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
		this.rows5 = temp;
	}
    
    this.selected = [];
	this.checkAll = '';
	this.deleteCheckUser.close();
  }

  /**
   * favorite set when add contact
   *
   * @param event     favorite set on click event
   */
  addFavoriteImage(event) {
    if (event.target.checked === true) {
      this.contactFavorite = true;
    } else {
      this.contactFavorite = false;
    }
  }

  /**
   * New contact add to the table
   *
   * @param addForm     Add contact form
   */
  addNewContact(addForm: NgForm) {
    if (this.contactImage == null) {
      this.contactImage = '../../../assets/images/portrait/small/default.png';
    } else {
      this.contactImage = this.contactImage;
    }

    if (this.contactactive === undefined) {
      this.contactactive = 'away';
    } else {
      this.contactactive = this.contactactive;
    }

    /**
     * Add contact if valid addform value
     */
    if (addForm.valid === true) {
      this.rows.push(
        new Contact(
          this.rows.length + 1,
          this.contactName,
          this.contactEmail,
          this.contactPhone,
          this.contactImage,
          this.contactFavorite,
          this.contactactive
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
    if (this.contactFlag === true) {
      this.value = this.contactPhone;
    } else if (this.contactFlag === false) {
      this.value = this.selectedContact['phone'];
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
    if (this.contactFlag === true) {
      this.contactPhone = no;
    } else if (this.contactFlag === false) {
      this.selectedContact['phone'] = no;
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
