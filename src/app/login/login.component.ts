import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from './../services/modal-switch.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalSwitch!:Boolean;
  
  constructor(private modalSwitchService:ModalSwitchService) { }

  ngOnInit(): void {
    this.modalSwitchService.$modal.subscribe((value: Boolean) => {
      this.modalSwitch = value;
    });
  }

  closeModal() {
    this.modalSwitchService.$modal.emit(false);
  }

  login(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }
}
