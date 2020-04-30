import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public managerForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
	private router: Router,
  ) { }

  ngOnInit(): void {
	    this.managerForm = this.formBuilder.group({
             managerFile: ['', Validators.required],
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

}
