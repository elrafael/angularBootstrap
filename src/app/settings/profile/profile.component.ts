import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public frm: FormGroup = new FormBuilder().group({
    firstName: ['John', [Validators.required]],
    lastName: ['Doe', [Validators.required]],
    username: ['jonh.doe', [Validators.required]],
    password: ['1234', [Validators.required]],
    email: ['john.doe@mail.com', [Validators.required, Validators.email]]
  })

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.frm.value)
  }

  get firstName() { return this.frm.get('firstName') }
  get lastName() { return this.frm.get('lastName') }
  get username() { return this.frm.get('username') }
  get password() { return this.frm.get('password') }
  get email() { return this.frm.get('email') }

}
