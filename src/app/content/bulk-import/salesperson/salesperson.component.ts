import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent implements OnInit {

    public spFileForm: FormGroup;
    public spInfoForm: FormGroup;
    public submitted = false;  
    public submittedInfo = false;  
    public showForm = false;

    constructor(
        private formBuilder: FormBuilder,
		private router: Router,
    ) { }

	ngOnInit(): void {
	    this.spFileForm = this.formBuilder.group({
             importFile: ['', Validators.required],
        });

		this.spInfoForm = this.formBuilder.group({
             spCode: ['', Validators.required],
             spName: ['', Validators.required],
             password: ['', Validators.required],
             spEmail: ['', [Validators.required, Validators.email]],
             store: [''],
             ccEmail: ['', Validators.email],
             active: [''],
        });
	}
  
	get f() { 
		return this.spFileForm.controls; 
	}
  
	onSubmit(){
		console.log("test");
		this.submitted = true;
		if (this.spFileForm.invalid) {
			return;
		}
		console.log(this.spFileForm)
	}
  
	toggle(){
		this.showForm = !this.showForm;
	}
  
	get h() { 
		return this.spInfoForm.controls; 
	}
  
	submitspInfo(){
		this.submittedInfo = true;
		if (this.spInfoForm.invalid) {
			return;
		}
		console.log(this.spInfoForm)  
	}
}

