import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from './../services/modal-switch.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  modalSwitch:Boolean;
  sessionSwitch:Boolean;

  constructor(private modalSwitchService:ModalSwitchService,
              private userService:UserService) {}

  ngOnInit() {
    this.modalSwitchService.modal.subscribe((value: Boolean) => {
      this.modalSwitch = value;
    });
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  openModal() {
    this.modalSwitchService.modal.emit(true);
  }

  logout() {
    this.userService.logout()
      .then (response => {
        console.log(response);
        location.reload();
      })
      .catch (error => console.log(error));
  }
}
