import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventoryForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
	private router: Router,
  ) { }

  ngOnInit(): void {
	    this.inventoryForm = this.formBuilder.group({
             inventoryFile: ['', Validators.required],
        });
  }
  
  get f() { 
    return this.inventoryForm.controls; 
  }
  
  onSubmit(){
	console.log("test");
    this.submitted = true;
	if (this.inventoryForm.invalid) {
        return;
    }
	console.log(this.inventoryForm)
  }

}
