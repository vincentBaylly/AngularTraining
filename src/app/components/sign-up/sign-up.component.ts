import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  //Property for the gender
  gender: string[] = ['Male', 'Female', 'Others'];
  //Property for the user
  user: User = new User(0, '', '', '', this.gender[0], false);

  constructor() {}

  ngOnInit(): void {}

  public onFormSubmit(form: NgForm) {
    this.user = form.value;
    console.log(this.user);
    console.log('valid: ' + form.valid);
  }
}
