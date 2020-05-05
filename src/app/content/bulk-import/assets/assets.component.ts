import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators,NgForm  } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

	@BlockUI('assetsInfo') blockUIAssetsInfo: NgBlockUI;
	@ViewChild('labelAssetsImport') labelAssetsImport: ElementRef;
	
	options = {
		minimize: true,
		reload: true,
		expand: true,
		close: true
	};
	
	public breadcrumb: any;
    public assetsForm: FormGroup;
	fileToUpload: File = null;
    public submitted = false;

    constructor(
        private formBuilder: FormBuilder,
		private _renderer: Renderer2,
	    private router: Router,
    ) { }

    ngOnInit(): void {
	    this.assetsForm = this.formBuilder.group({
			 name: [''],
			 importFile: ['', Validators.required],
        });
    }
  
    get f() { 
        return this.assetsForm.controls; 
    }
  
    onSubmit(){
        this.submitted = true;

		if (this.assetsForm.invalid) {
			return;
		}

		console.log(this.assetsForm)
    }
	
	onFileChange(files: FileList) {
		this.labelAssetsImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
		this.fileToUpload = files.item(0);
	}
	
	reloadAssetsFileUpload() {
		this.blockUIAssetsInfo.start('Loading..');
		setTimeout(() => {
			this.blockUIAssetsInfo.stop();
		}, 2500);
	}
}