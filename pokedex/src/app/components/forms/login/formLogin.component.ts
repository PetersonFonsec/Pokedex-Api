import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.scss'],
})
export class FormLoginComponent {
  @ViewChild('form', { static: false }) form: NgForm;
  user: any;
  agree: Boolean;

  constructor() {
    this.user = {
      name: '',
      password: '',
      email: '',
    };
  }
  submit() {}
}
