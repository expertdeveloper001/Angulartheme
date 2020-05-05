import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
	@BlockUI('inventoryInfo') blockUIInventoryInfo: NgBlockUI;
	@ViewChild('labelInventoryImport') labelInventoryImport: ElementRef;
	
	options = {
		minimize: true,
		reload: true,
		expand: true,
		close: true
	};
	
	public breadcrumb: any;
	
	inventoryForm: FormGroup;
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
		this.inventoryForm = this.formBuilder.group({
			importFile: ['', Validators.required],
		});
	}
	
	get f() {
		return this.inventoryForm.controls;
	}
	
	inventoryFileUpload(){
		this.submitted = true;

		if (this.inventoryForm.invalid) {
			return;
		}
		console.log(this.inventoryForm);
	}
	
	onFileChange(files: FileList) {
		this.labelInventoryImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
		this.fileToUpload = files.item(0);
	}
	
	reloadInventoryFileUpload() {
		this.blockUIInventoryInfo.start('Loading..');
		setTimeout(() => {
			this.blockUIInventoryInfo.stop();
		}, 2500);
	}

}
