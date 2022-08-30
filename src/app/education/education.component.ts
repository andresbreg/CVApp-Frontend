import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { UserService } from '../services/user.service';
import { Education } from '../model/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  data:any = [];

  addEducation:Boolean = false;
  editEducation:Boolean = false;
  sessionSwitch:Boolean;

  educationItem:Education = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    course:''
  }

  constructor(private dataService:GetDataService,
              private userService:UserService) {}

  ngOnInit(): void {
    this.dataService.getData('education').subscribe ( response => {
      this.data = response})
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  remove(id:string) {
    this.dataService.deleteElement('education', id).subscribe (
      response => {this.ngOnInit()})
  }

  getElement(id:string) {
    this.dataService.getElement('education', id).subscribe (
      response => {this.educationItem = response})
  }

  openAddEducation() {
    if(this.addEducation) {
      this.addEducation = false;
    } else {
      this.addEducation = true;
    }
    return false;
  }

  openEditEducation() {
    if(this.editEducation) {
      this.editEducation = false;
    } else {
      this.editEducation = true;
    }
    return false;
  }
}
