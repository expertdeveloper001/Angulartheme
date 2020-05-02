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
//import { DatePipe } from '@angular/common';
declare var require: any;
const now = new Date();
 
@Component({
  selector: 'app-edit-new-specials',
  templateUrl: './edit-new-specials.component.html',
  styleUrls: ['./edit-new-specials.component.css']
})
export class EditNewSpecialsComponent implements OnInit {

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

	multipleMultiSelect: any;
	specialId:any;
	data: any = [];
	row:any;
	checkeDate = false;
	checkCategory = false;
  
	public specialForm: FormGroup;
	public submitted = false;
  
	public imageList: FormArray;

	constructor(private tableApiservice: TableApiService,
		private formBuilder: FormBuilder,
		private router: Router,
		private modal: NgbModal,
		private cd: ChangeDetectorRef,
    ) { }

	get projectFormGroup() {
		return this.specialForm.get('imageArray') as FormArray;
	}

	public multipleSelectArray = [
      { "item_id": 1, "item_text": "Audi"
      },
      { "item_id": 2, "item_text": "Bmw"
      },
      { "item_id": 3, "item_text": "Jaguar"
      },
      { "item_id": 4, "item_text": "Suzuki"
      },
      { "item_id": 5, "item_text": "Saab"
      },
      { "item_id": 6, "item_text": "Smart"
      },
      { "item_id": 7, "item_text": "Mini"
      }
    ]
    selectCategory = [{ "item_id": 1, "item_text": "Audi" }, { "item_id": 2, "item_text": "Bmw"}];	
  
	ngOnInit() {
	   this.specialForm = this.formBuilder.group({
			id : [''],
			title: ['', Validators.required],
			category: ['', Validators.required],
			eDate: [''],
			pdf: [''],
			thumbnail: [''],
			imageArray: this.formBuilder.array([this.createFile()])
		});
		this.imageList = this.specialForm.get('imageArray') as FormArray;
		this.specialId = window.localStorage.getItem("editSpecialsId");
	
		this.data = [
			{ "seq": "1", "title": "Otto", "category": "@mdo", "effectiveDate": "34", "createdate": "22/05/2017", "updatedat": "10/05/2018"},
			{ "seq": "2", "title": "Thornton", "category": "@fat", "effectiveDate": "36", "createdate": "20/05/2017", "updatedat": "13/05/2018"},
			{ "seq": "3", "title": "the Bird", "category": "@twitter", "effectiveDate": "38", "createdate": "20/05/2019", "updatedat": "16/05/2018"},
			{ "seq": "4", "title": "Otto", "category": "@mdo", "effectiveDate": "32", "createdate": "20/05/2017", "updatedat": "20/05/2018"},
			{ "seq": "5", "title": "Thornton", "category": "@fat", "effectiveDate": "34", "createdate": "20/05/2017", "updatedat": "11/05/2018"},
			{ "seq": "6", "title": "the Bird", "category": "@twitter", "effectiveDate": "39", "createdate": "20/05/2017", "updatedat": "16/06/2018"},
			{ "seq": "7", "title": "Otto", "category": "@mdo", "effectiveDate": "31", "createdate": "20/05/2011", "updatedat": "16/07/2018"},
			{ "seq": "9", "title": "Thornton", "category": "@fat", "effectiveDate": "40", "createdate": "20/04/2017", "updatedat": "16/08/2018"},
			{ "seq": "9", "title": "the Bird", "category": "@twitter", "effectiveDate": "48", "createdate": "20/05/2018", "updatedat": "16/05/2018"},
			{ "seq": "10", "title": "Otto", "category": "@mdo", "effectiveDate": "36", "createdate": "20/05/2017", "updatedat": "16/01/2018"},
			{ "seq": "11", "title": "Thornton", "category": "@fat", "effectiveDate": "33", "createdate": "20/06/2017", "updatedat": "16/06/2018"},
			{ "seq": "12", "title": "the Bird", "category": "@twitter", "effectiveDate": "34", "createdate": "20/05/2017", "updatedat": "20/05/2018"}
		  ];
		for(var i = 0; i < this.data.length; i++){
			if(this.data[i].seq == this.specialId){
				this.row = this.data[i];
			}
		}
		this.setdata(this.row);
    }
  
    setdata(row){
	    this.specialForm.get("id").setValue(row.seq);
	    this.specialForm.get("title").setValue(row.title);
	    this.specialForm.get("category").setValue(3);
    }
  
    createFile(): FormGroup {
		return this.formBuilder.group({
		    file: ['', Validators.required]
		});
    }
  
	addFile() {
		this.imageList.push(this.createFile());
	}
  
    removeFile(index) {
        this.imageList.removeAt(index);
    }
  
    onFileChange(event) {
		const reader = new FileReader();
		if (event.target.files && event.target.files.length) {
		  const [file] = event.target.files;
		  reader.readAsDataURL(file);
		  reader.onload = () => {
			this.specialForm.patchValue({
			  file: reader.result
			});
			this.cd.markForCheck();
		  };
		}
    }
    
    get f() { 
		return this.specialForm.controls; 
    }
  
	onSubmit(){
		this.submitted = true;

		if (this.specialForm.invalid) {
			return;
		}
		console.log(this.specialForm)
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


