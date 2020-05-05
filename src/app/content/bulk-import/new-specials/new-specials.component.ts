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
  selector: 'app-new-specials',
  templateUrl: './new-specials.component.html',
  styleUrls: ['./new-specials.component.css']
})
export class NewSpecialsComponent implements OnInit {

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
    rows: any;
    stylerows: any;
    baserows: any;
    temp2 = this.rows;
    deleteRow:any;
    deleteSpecial:any;
    public specialForm: FormGroup;
    public submitted = false;
    checkCategory = false;
    public imageList: FormArray;

    constructor(private tableApiservice: TableApiService,
		private formBuilder: FormBuilder,
		private router: Router,
		private modal: NgbModal,
		private cd: ChangeDetectorRef
    ) { }
	
    get projectFormGroup() {
        return this.specialForm.get('imageArray') as FormArray;
    }
  
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

    ngOnInit() {	   
		this.specialForm = this.formBuilder.group({
			title: ['', Validators.required],
			category: ['', Validators.required],
			eDate: ['', Validators.required],
			pdf: ['', Validators.required],
			thumbnail: ['', Validators.required],
			imageArray: this.formBuilder.array([this.createFile()])
		});

		this.imageList = this.specialForm.get('imageArray') as FormArray;
		
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
		
		this.getTabledata();
    }

    createFile(): FormGroup {
        return this.formBuilder.group({
            file: ['']
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
  
    getTabledata() {
		this.rows = this.data;
		this.temp2 = this.data;
		this.stylerows = this.data;
		this.baserows = this.data;
    }
  
    DeleteModel(DeleteRowModel, row){
		this.deleteSpecial = row;
		this.deleteRow = this.modal.open(DeleteRowModel, { windowClass: 'animated fadeInDown' });  
	}
  
	EditSpecials(row){
		window.localStorage.removeItem("editSpecialsId");
		window.localStorage.setItem("editSpecialsId", row.seq.toString());
		this.router.navigate(['bulk-import/new-specials/edit-new-specials']);  
	}

	updateFilter(event) {
		const val = event.target.value.toLowerCase();
		this.rows = [...this.temp2];
		this.temp = [...this.rows];
    // filter our data
		const temp = this.rows.filter(function (d) {
			return d.seq.toLowerCase().indexOf(val) !== -1 ||
			d.title.toLowerCase().indexOf(val) !== -1 ||
			d.category.toLowerCase().indexOf(val) !== -1 ||
			d.effectiveDate.toLowerCase().indexOf(val) !== -1 ||
			d.createdate.toLowerCase().indexOf(val) !== -1 ||
			d.updatedat.toLowerCase().indexOf(val) !== -1 ||
			!val;
        });

        this.rows = temp;
        this.table.offset = 0;
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
  
	deleteTableRow() {
		let index = 0;

		const temp = [...this.rows];
		for (const tempRow of temp) {
			if (tempRow.id === this.deleteSpecial.id) {
				temp.splice(index, 1);
				break;
			}
			index++;
		}
		this.deleteRow.close();
		this.rows = temp;

		this.deleteSpecial = [];
    }

    gotoManageImage(){
		this.router.navigate(['bulk/new-specials/manage-image-sequence']);
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
