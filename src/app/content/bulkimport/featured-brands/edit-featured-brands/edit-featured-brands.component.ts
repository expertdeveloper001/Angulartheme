import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbDateStruct, NgbTimeStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TableApiService } from 'src/app/_services/table-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'app-edit-featured-brands',
  templateUrl: './edit-featured-brands.component.html',
  styleUrls: ['./edit-featured-brands.component.css']
})
export class EditFeaturedBrandsComponent implements OnInit {

    @ViewChild('ng-select') ngSelect;
    @BlockUI('baseStyle') blockUIBaseStyle: NgBlockUI;
    @BlockUI('noStylingClasses') blockUINoStylingClasses: NgBlockUI;
  
    @BlockUI('basicModals') blockUIBasicModals: NgBlockUI;
    @BlockUI('modalThemes') blockUIModalThemes: NgBlockUI;
    @BlockUI('simpleDatepicker') blockUISimpleDatepicker: NgBlockUI;

    @BlockUI('multipleSelect') blockUIMultipleSelect: NgBlockUI; 
    @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;

    public config: PerfectScrollbarConfigInterface = { suppressScrollY : true };
    @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
    @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;
    @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

    temp = [];
    multipleMultiSelect: any;

    public breadcrumb: any;
    data: any;
    row: any;
    stylerows: any;
    baserows: any;
    deleteRow:any;
    deleteSpecial:any;
    public featuredForm: FormGroup;
    public submitted = false;
	fbId: any; 

    constructor(private tableApiservice: TableApiService,
		private formBuilder: FormBuilder,
		private router: Router,
		private modal: NgbModal,
		private cd: ChangeDetectorRef
    ) { }
  
    public multipleSelectArray = [
		{ "item_id": 1, "item_text": "Audi"
		},
		{ "item_id": 2, "item_text": "Jaguar"
		},
		{ "item_id": 3, "item_text": "Bmw"
		},
		{ "item_id": 4, "item_text": "Mini"
		}
    ]

	selectCategory = [{ "item_id": 1, "item_text": "Audi" }, { "item_id": 2, "item_text": "Bmw"}];

    ngOnInit() {	   
		this.featuredForm = this.formBuilder.group({
			title: ['', Validators.required],
			category: ['', Validators.required],
			eDate: ['', Validators.required],
			pdf: [''],
			image: [''],
			descriptions: ['', Validators.required]
		});
		this.fbId = window.localStorage.getItem("editfeaturedId");

		this.data = [
			{ "seq": "1", "title": "Otto", "category": "BMW", "effectiveDate": "22/05/2017", "descriptions": "", "createdate": "22/05/2017", "updatedat": "10/05/2018"},
			{ "seq": "2", "title": "Thornton", "category": "AUDIs", "effectiveDate": "22/06/2017","descriptions": "", "createdate": "20/05/2017", "updatedat": "13/05/2018"},
			{ "seq": "3", "title": "the Bird", "category": "BMW", "effectiveDate": "23/05/2017", "descriptions": "aa", "createdate": "20/05/2019", "updatedat": "16/05/2018"},
			{ "seq": "4", "title": "Otto", "category": "AUDIs", "effectiveDate": "25/05/2017", "descriptions": "", "createdate": "20/05/2017", "updatedat": "20/05/2018"},
			{ "seq": "5", "title": "Thornton", "category": "AUDIs", "effectiveDate": "28/05/2017", "descriptions": "","createdate": "20/05/2017", "updatedat": "11/05/2018"},
			{ "seq": "6", "title": "the Bird", "category": "BMW", "effectiveDate": "29/05/2017", "descriptions": "aa", "createdate": "20/05/2017", "updatedat": "16/06/2018"},
			{ "seq": "7", "title": "Otto", "category": "JAGUAR", "effectiveDate": "30/05/2017", "descriptions": "", "createdate": "20/05/2011", "updatedat": "16/07/2018"},
			{ "seq": "9", "title": "Thornton", "category": "AUDIs", "effectiveDate": "22/07/2017", "descriptions": "", "createdate": "20/04/2017", "updatedat": "16/08/2018"},
			{ "seq": "9", "title": "the Bird", "category": "BMW", "effectiveDate": "22/08/2017", "descriptions": "aa", "createdate": "20/05/2018", "updatedat": "16/05/2018"},
			{ "seq": "10", "title": "Otto", "category": "JAGUAR", "effectiveDate": "01/05/2017", "descriptions": "", "createdate": "20/05/2017", "updatedat": "16/01/2018"},
			{ "seq": "11", "title": "Thornton", "category": "AUDIs", "effectiveDate": "22/10/2017", "descriptions": "", "createdate": "20/06/2017", "updatedat": "16/06/2018"},
			{ "seq": "12", "title": "the Bird", "category": "BMW", "effectiveDate": "12/05/2017", "descriptions": "", "createdate": "20/05/2017", "updatedat": "20/05/2018"}
		];

		for(var i = 0; i < this.data.length; i++){
			if(this.data[i].seq == this.fbId){
				this.row = this.data[i];
			}
		}
		this.setdata(this.row);
    }
   
    setdata(row){
	    this.featuredForm.get("title").setValue(row.title);
	    this.featuredForm.get("descriptions").setValue(row.descriptions);
    }
    
	get f() { 
		return this.featuredForm.controls; 
    }
  
	onSubmit(){
		this.submitted = true;

		if (this.featuredForm.invalid) {
			return;
		}
		console.log(this.featuredForm)
    }
	
	back(){
	    this.router.navigate(['bulk/featured-brands']);	
	}
}