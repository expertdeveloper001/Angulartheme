import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customersForm: FormGroup;
  public customersStringForm: FormGroup;
  public customerInfoForm: FormGroup;
  public submitted = false;
  public submittedString = false;  
  public submittedInfo = false;  
  public showForm = false;

  constructor(
    private formBuilder: FormBuilder,
	private router: Router,
  ) { }

  ngOnInit(): void {
	    this.customersForm = this.formBuilder.group({
             customerFile: ['', Validators.required],
        });
		
		this.customersStringForm = this.formBuilder.group({
             customerString: ['', Validators.required],
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
    return this.customersForm.controls; 
  }
  
  onSubmit(){
	console.log("test");
    this.submitted = true;
	if (this.customersForm.invalid) {
        return;
    }
	console.log(this.customersForm)
  }
  
  get g() { 
    return this.customersStringForm.controls; 
  }
  
  submitDetails(){
	console.log("test");
    this.submittedString = true;
	if (this.customersStringForm.invalid) {
        return;
    }
	console.log(this.customersStringForm)  
  }
  
  toggle(){
	this.showForm = !this.showForm;
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

}

