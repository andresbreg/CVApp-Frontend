import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { UserService } from '../services/user.service';
import { About } from '../model/model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  data:any = [];

  editAbout:Boolean = false;
  sessionSwitch:Boolean;

  aboutItem:About = {
    location:'',
    phoneNumber:'',
    email:'',
    about:''
  }

  constructor(private dataService: GetDataService,
              private userService:UserService) {}

  ngOnInit(): void {
    this.dataService.getData('about').subscribe ( response => {
      this.data = response})
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  getElement(id:string) {
    this.dataService.getElement('about', id).subscribe (
      response => {this.aboutItem = response})
  }

  openEditAbout() {
    if(this.editAbout) {
      this.editAbout = false;
    } else {
      this.editAbout = true;
    }
    return false;
  }
}
