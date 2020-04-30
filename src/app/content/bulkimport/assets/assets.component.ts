import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  public assetsForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
	private router: Router,
  ) { }

  ngOnInit(): void {
	    this.assetsForm = this.formBuilder.group({
			 name: [''],
			 assetsFile: ['', Validators.required],
        });
  }
  
  get f() { 
    return this.assetsForm.controls; 
  }
  
  onSubmit(){
	console.log("test");
    this.submitted = true;
	if (this.assetsForm.invalid) {
        return;
    }
	console.log(this.assetsForm)
  }

}
