export class User {
  id: number;
  email: string;
  //Both the passwords are in a single object
  password: {
    pwd: string;
    confirmPwd: string;
  };
  gender: string;
  terms: boolean;

  constructor(
    id: number,
    email: string,
    pwd: string,
    confirmPwd: string,
    gender: string,
    terms: boolean
  ) {
    this.id = id;
    this.email = email;
    this.password = { pwd, confirmPwd };
    this.gender = gender;
    this.terms = terms;
  }
}
