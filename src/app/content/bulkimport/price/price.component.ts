import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public priceForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
	    this.priceForm = this.formBuilder.group({
             priceFile: ['', Validators.required],
        });
  }
  
  get f() { 
    return this.priceForm.controls; 
  }
  
  onSubmit(){
	console.log("test");
    this.submitted = true;
	if (this.priceForm.invalid) {
        return;
    }
  }

}
