import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from './../services/modal-switch.service';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  modalSwitch: Boolean;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  errorMessage: boolean;

  constructor(private modalSwitchService:ModalSwitchService,
              private userService:UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.modalSwitchService.modal.subscribe((value: Boolean) => {
      this.modalSwitch = value;
    });
  }

  closeModal() {
    this.modalSwitchService.modal.emit(false);
  }

  login() {
    this.userService.login(this.loginForm.value)
      .then(response => {
        console.log(response);
        this.modalSwitchService.modal.emit(false);
        location.reload();
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = false;
      });
  }
}
