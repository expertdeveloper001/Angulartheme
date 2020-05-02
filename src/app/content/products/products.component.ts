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

  @BlockUI('productStyle') blockUIProductStyle: NgBlockUI;
  
  public config: PerfectScrollbarConfigInterface = { suppressScrollY : true };
  
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  @Output() closeModalEvent = new EventEmitter<boolean>();
  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  temp = [];

  constructor(private tableApiservice: TableApiService, private modalService: NgbModal) { }
  public breadcrumb: any;
  data: any;
  rows: any;
  temp2 = this.rows;

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Styling DataTable',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'DataTables',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Styling DataTable',
          'isLink': false
        }
      ]
    };
      this.tableApiservice.getStylingData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
      });
  }
  
  getTabledata() {
    this.rows = this.data.rows;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.PartNo.toLowerCase().indexOf(val) !== -1 ||
      d.PartPrint.toLowerCase().indexOf(val) !== -1 ||
      d.PartOERef.toLowerCase().indexOf(val) !== -1 ||
      d.PartAlternate.toLowerCase().indexOf(val) !== -1 ||
      d.PartDescription.toLowerCase().indexOf(val) !== -1 ||
      !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;

  }
  
  reloadProductStyle() {
    this.blockUIProductStyle.start('Loading..');

    setTimeout(() => {
      this.blockUIProductStyle.stop();
    }, 2500);
  }

  deleteCheckedRow(DangerModelContent) {
    this.modalService.open(DangerModelContent, { windowClass: 'animated fadeInDown' });
  }

}
