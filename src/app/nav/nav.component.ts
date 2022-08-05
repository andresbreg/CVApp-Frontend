import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from './../services/modal-switch.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  modalSwitch!:Boolean;

  constructor(private modalSwitchService:ModalSwitchService) { }

  ngOnInit() {
    this.modalSwitchService.$modal.subscribe((value: Boolean) => {
      this.modalSwitch = value;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
