import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Login";
  logoSource: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/600px-Free_logo.svg.png";
  user = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  
  }
  handleChangeUser(event) {
    this.user.username = event.target.value;
  }

  handleChangePassword(event) {
    this.user.password = event.target.value;
  }

  handleInputChange(event, key) {
    this.user[key] = event.target.value;
  }

  handleLogin(event) {
    alert(`Welcome ${this.user.username}`);
    console.log(this.user);
  }
}
