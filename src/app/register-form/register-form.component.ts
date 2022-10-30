import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private userService:UserService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [], []),
      password: new FormControl('', [], [])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
