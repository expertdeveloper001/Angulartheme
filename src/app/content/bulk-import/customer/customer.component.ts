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
	customerAddUpdateForm: FormGroup;
	fileToUpload: File = null;
	addUpdateCustomerForm: boolean = false ; // hidden by default
	submitted = false;
	
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
		
		this.customerAddUpdateForm = this.formBuilder.group({
			Customer_Code: ['', Validators.required],
			Password: ['', Validators.required],
			SalesCode: ['', Validators.required],
			Active: ['', Validators.required],
			DeliveryZone: ['', Validators.required],
			Store: ['', Validators.required],
			CustomerName: ['', Validators.required],
			City: ['', Validators.required],
			State: ['', Validators.required],
			Zip_code: ['', Validators.required],
			CustType: ['', Validators.required],
			InvoiceEmail: ['', Validators.required],
			PromotionEmail: ['', Validators.required],
			StatementEmail: ['', Validators.required],
			MultiEmail: ['', Validators.required],
		});
	}
	
	get f() {
		return this.customerForm.controls;
	}
	
	customerFileUpload(){
		this.submitted = true;
		console.log(this.customerForm);
		if (this.customerForm.invalid) {
			return;
		}
	}
	
	customerString(){
		this.submitted = true;
		console.log(this.customerStringForm);
		if (this.customerStringForm.invalid) {
			return;
		}
	}
	
	addUpdateButtonShowCustomerForm(){
		this.addUpdateCustomerForm = true;
	}
	
	customerAddUpdate(){
		this.submitted = true;
		console.log(this.customerAddUpdateForm);
		if (this.customerAddUpdateForm.invalid) {
			return;
		}
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
