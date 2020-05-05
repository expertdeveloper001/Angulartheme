import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

	@BlockUI('managerInfo') blockUIManagerInfo: NgBlockUI;
	@ViewChild('labelmanagerImport') labelManagerImport: ElementRef;
	
	options = {
		minimize: true,
		reload: true,
		expand: true,
		close: true
	};
	
	public breadcrumb: any;
	
	public managerForm: FormGroup;
    public submitted = false;
	fileToUpload: File = null;
	
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
		this.managerForm = this.formBuilder.group({
             importFile: ['', Validators.required],
        });
	}
	
	get f() { 
		return this.managerForm.controls; 
	}
	  
	onSubmit(){
		console.log("test");
		this.submitted = true;
		if (this.managerForm.invalid) {
			return;
		}
		console.log(this.managerForm)
	}
	
	onFileChange(files: FileList) {
		this.labelManagerImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
		this.fileToUpload = files.item(0);
	}
	
	reloadManagerFileUpload() {
		this.blockUIManagerInfo.start('Loading..');
		setTimeout(() => {
			this.blockUIManagerInfo.stop();
		}, 2500);
	}

}
