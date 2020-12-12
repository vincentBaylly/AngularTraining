import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  //Property for the gender
  private gender: string[] = ['Male', 'Female', 'Others'];
  //Property for the user
  private user: User = new User(0, '', '', '', this.gender[0], false);

  constructor() {}

  ngOnInit(): void {}
}
