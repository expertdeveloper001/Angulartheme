import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
	
	@BlockUI('pricingInfo') blockUIPricingInfo: NgBlockUI;
	@ViewChild('labelPricingImport') labelPricingImport: ElementRef;
	
	options = {
		minimize: true,
		reload: true,
		expand: true,
		close: true
	};
	public breadcrumb: any;
	
	pricingForm: FormGroup;
	fileToUpload: File = null;
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
		this.pricingForm = this.formBuilder.group({
			importFile: ['', Validators.required],
		});
	}
	
	get f() {
		return this.pricingForm.controls;
	}
	
	pricingFileUpload(){
		this.submitted = true;
		console.log(this.pricingForm);
		if (this.pricingForm.invalid) {
			return;
		}
	}
	
	onFileChange(files: FileList) {
		this.labelPricingImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
		this.fileToUpload = files.item(0);
	}
	
	reloadPricingFileUpload() {
		this.blockUIPricingInfo.start('Loading..');
		setTimeout(() => {
			this.blockUIPricingInfo.stop();
		}, 2500);
	}


}
