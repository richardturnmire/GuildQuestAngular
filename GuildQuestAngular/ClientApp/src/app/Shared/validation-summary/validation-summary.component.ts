import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.scss']
})
export class ValidationSummaryComponent implements OnInit
{
  @Input() form: NgForm;
  errors: string[] = [];

  constructor() { }

  ngOnInit()
  {
    if (this.form instanceof NgForm === false)
    {
      throw new Error('You must supply the validation summary with an NgForm.');
    }
    this.form.statusChanges.subscribe(status =>
    {
      this.resetErrorMessages();
      this.generateErrorMessages(this.form.control);
    });
  }

  resetErrorMessages()
  {
    this.errors.length = 0;
  }

  generateErrorMessages(formGroup: FormGroup) {
    //console.log(formGroup);
    console.log('Begin checking errors');
    Object.keys(formGroup.controls).forEach(controlName =>
    {
      let control = formGroup.controls[controlName];
     console.log(control);
      if (control === undefined || control === null || !control.dirty )
      {
        return;
      }
      console.log('Passed first test');
      console.log(control);
      let errors = control.errors;
      if (errors === undefined || errors === null || errors.count === 0 )
      {
        return;
      }
      console.log('Passed second test');
      console.log(errors);
      // Handle the 'required' case
      console.log('Checking if required');
      if (errors.required)
      {
        this.errors.push(`${controlName} is required`);
        console.log('Required error');
      }
      // Handle 'email' case
      console.log('Checking if valid email');
      if (errors.email)
      {
        this.errors.push(`${controlName} is not a valid email.`);
        console.log('Invalid email');
      }
      console.log('Checking minimum length');
      // Handle 'minlength' case
      if (errors.minlength) {
        this.errors.push(`${controlName} minimum length is ${errors.minlength.requiredLength}. You need ${errors.minlength.requiredLength - errors.minlength.actualLength } more characters.`);
        console.log('Minimum length error');
      }
      console.log('Checking maximum length');
      // Handle 'maxlength' case
      if (errors.maxlength)
      {
        this.errors.push(`${controlName} maximum length is ${errors.maxlength.requiredLength}. You are over by ${errors.maxlength.actualLength - errors.maxlength.requiredLength - 7 } characters.`);
        console.log('Maximum length error');
      }
      // Handle custom messages.
      console.log('Checking for other errors');
      if (errors.message)
      {
        this.errors.push(`${controlName} ${errors.message}`);
        console.log('Unidentified error');
      }
    });
  }
}
