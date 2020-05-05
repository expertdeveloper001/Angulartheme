import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	@BlockUI('customerInfo') blockUICustomerInfo: NgBlockUI;
	@ViewChild('labelCustomerImport') labelCustomerImport: ElementRef;
	
	options = {
		minimize: true,
		reload: true,
		expand: true,
		close: true
	};
	
	public breadcrumb: any;
	
	customerForm: FormGroup;
	customerStringForm: FormGroup;
	customerInfoForm: FormGroup;
	fileToUpload: File = null;
	addUpdateCustomerForm: boolean = false ; // hidden by default
	submitted: boolean = false;
	submittedString: boolean = false;
	submittedInfo: boolean = false;
	customerModel:any;
	modelBtn:any = "Edit";
	editFormshow:boolean = false;
	
	/**
	* Constructor
	*
	* @param NgbModal  modal;
	* @param Renderer2  _renderer
	*/
	
	constructor(
		private modal: NgbModal,
		private _renderer: Renderer2,
		private formBuilder: FormBuilder
    ) { }
	
	/**
	* OnInit
	*/
	ngOnInit() {
		this.customerForm = this.formBuilder.group({
			importFile: ['', Validators.required],
		});
		
		this.customerStringForm = this.formBuilder.group({
			customer_details_string: ['', Validators.required],
		});
		
		this.customerInfoForm = this.formBuilder.group({
             customerCode: ['', Validators.required],
             password: ['', Validators.required],
             salesCode: ['', Validators.required],
             active: ['Y'],
             deliveryZone: [''],
             store: [''],
             customerName: ['', Validators.required],
             city: [''],
             state: [''],
             zip: [''],
             custType: [''],
             invoiceEmail: ['', [Validators.required, Validators.email]],
             promotionEmail: ['', Validators.email],
             statementEmail: ['', Validators.email],
             multiEmail: ['', Validators.email],
        });
	}
	
	get f() {
		return this.customerForm.controls;
	}
	
	customerFileUpload(){
		this.submitted = true;

		if (this.customerForm.invalid) {
			return;
		}
		console.log(this.customerForm);
	}
	
	get g() {
		return this.customerStringForm.controls;
	}
	
	customerString(addCustomerModel){
		this.submittedString = true;

		if (this.customerStringForm.invalid) {
			return;
		}
		this.customerModel = this.modal.open(addCustomerModel, {
		  windowClass: 'animated fadeInDown',
		  size: 'lg'
		});
		console.log(this.customerStringForm);
	}
	
	addCustomers(){
		this.customerModel.close();
		console.log();
	}
	
	addCustomer(){
		this.customerModel.close();
	}
	
	abortCustomer(){
		this.customerModel.close();
		this.customerStringForm.reset();
	}
	
	editCustomer(){
		this.modelBtn = "Save";
		this.editFormshow = true;
		
	}
	
	toggle(){
		this.addUpdateCustomerForm = !this.addUpdateCustomerForm;
    }
  
    get h() { 
		return this.customerInfoForm.controls; 
	}
	  
	submitCustomer(){
		this.submittedInfo = true;
		if (this.customerInfoForm.invalid) {
			return;
		}
		console.log(this.customerInfoForm)  
	}
	
	onFileChange(files: FileList) {
		this.labelCustomerImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
		this.fileToUpload = files.item(0);
	}
	
	reloadInventoryFileUpload() {
		this.blockUICustomerInfo.start('Loading..');
		setTimeout(() => {
			this.blockUICustomerInfo.stop();
		}, 2500);
	}
	

}
