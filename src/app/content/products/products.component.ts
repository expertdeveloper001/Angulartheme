import { Component, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableApiService } from 'src/app/_services/table-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @BlockUI('baseStyle') blockUIBaseStyle: NgBlockUI;
  @BlockUI('noStylingClasses') blockUINoStylingClasses: NgBlockUI;

  public config: PerfectScrollbarConfigInterface = { suppressScrollY : true };
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  temp = [];

  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

  constructor(
      private tableApiservice: TableApiService,
      private modal: NgbModal,
  ) { }

  public breadcrumb: any;
  data: any;
  rows: any;
  deleteRecords: any;
  stylerows: any;
  baserows: any;
  temp2 = this.rows;

  ngOnInit() {

      this.tableApiservice.getStylingData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
      });
  }
  getTabledata() {
    this.rows = this.data.rows;
    this.temp2 = this.data.rows;
    this.stylerows = this.data.stylerows;
    this.baserows = this.data.baserows;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.partNo.toLowerCase().indexOf(val) !== -1 ||
      d.partPrint.toLowerCase().indexOf(val) !== -1 ||
      d.partOERef.toLowerCase().indexOf(val) !== -1 ||
      d.partAlternate.toLowerCase().indexOf(val) !== -1 ||
      d.partDescription.toLowerCase().indexOf(val) !== -1 ||
      !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;

  }
  
  DeleteRecordsModel(DeleteModel){
	this.deleteRecords = this.modal.open(DeleteModel, { windowClass: 'animated fadeInDown' });
  }
  
  DeleteAllRecords(){
	this.rows = []; 
    this.deleteRecords.close();
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