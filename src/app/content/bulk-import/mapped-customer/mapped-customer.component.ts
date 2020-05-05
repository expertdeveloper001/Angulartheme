import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TableApiService } from 'src/app/_services/table-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mapped-customer',
  templateUrl: './mapped-customer.component.html',
  styleUrls: ['./mapped-customer.component.css']
})
export class MappedCustomerComponent implements OnInit {
	
  @BlockUI('baseStyle') blockUIBaseStyle: NgBlockUI;
  @BlockUI('noStylingClasses') blockUINoStylingClasses: NgBlockUI;

  public config: PerfectScrollbarConfigInterface = { suppressScrollY : true };
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  temp = [];

  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

  constructor(
	private tableApiservice: TableApiService,
	private modal: NgbModal,
  ) { }
  public breadcrumb: any;
  data: any;
  rows: any;
  temp2 = this.rows;
  customerModel:any;

  ngOnInit() {
      // this.tableApiservice.getStylingData().subscribe(Response => {
      // this.data = Response;
      // this.getTabledata();
      // });
	  this.data = [
	  {'seq': 1, 'customerCode': 121, 'password': 12345, 'customerName': 'Dev', 'salesCode': 211, 'salesPerson': 'Mac', 'salesPersonEmail': 'mac@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'dev@gmail.com'},
	  {'seq': 2, 'customerCode': 123, 'password': 13345, 'customerName': 'Scott', 'salesCode': 261, 'salesPerson': 'test', 'salesPersonEmail': 'test@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'scott@gmail.com'},
	  {'seq': 3, 'customerCode': 125, 'password': 12245, 'customerName': 'Sean', 'salesCode': 251, 'salesPerson': 'Dev', 'salesPersonEmail': 'dev@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'sean@gmail.com'},
	  {'seq': 4, 'customerCode': 127, 'password': 15445, 'customerName': 'eric', 'salesCode': 221, 'salesPerson': 'Show', 'salesPersonEmail': 'show@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'eric@gmail.com'},
	  {'seq': 5, 'customerCode': 133, 'password': 13445, 'customerName': 'John', 'salesCode': 231, 'salesPerson': 'lean', 'salesPersonEmail': 'lean@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'john@gmail.com'},
	  {'seq': 6, 'customerCode': 133, 'password': 13445, 'customerName': 'John', 'salesCode': 231, 'salesPerson': 'lean', 'salesPersonEmail': 'lean@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'john@gmail.com'},
	  {'seq': 7, 'customerCode': 133, 'password': 13445, 'customerName': 'John', 'salesCode': 231, 'salesPerson': 'lean', 'salesPersonEmail': 'lean@gmail.com', 'city': 'Sidny', 'customerInvoiceEmail': 'john@gmail.com'},
	  ]

	  this.getTabledata();
  }
  getTabledata() {
    this.rows = this.data;
    this.temp2 = this.data;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 ||
      d.position.toLowerCase().indexOf(val) !== -1 ||
      d.office.toLowerCase().indexOf(val) !== -1 ||
      d.age.toLowerCase().indexOf(val) !== -1 ||
      d.salary.toLowerCase().indexOf(val) !== -1 ||
      d.startdate.toLowerCase().indexOf(val) !== -1 ||
      !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  
  viewCustomers(customerList, id){
	  console.log(id);
	this.customerModel = this.modal.open(customerList, {
      windowClass: 'animated fadeInDown',
	  size: 'lg'
    });
  }

  reloadBaseStyle() {
    this.blockUIBaseStyle.start('Loading..');

    setTimeout(() => {
      this.blockUIBaseStyle.stop();
    }, 2500);
  }

  reloadNoStylingClasses() {
    this.blockUINoStylingClasses.start('Loading..');

    setTimeout(() => {
      this.blockUINoStylingClasses.stop();
    }, 2500);
  }
}
