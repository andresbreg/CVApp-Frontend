import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { UserService } from '../services/user.service';
import { Experience } from '../model/model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  data:any = [];

  addExperience:Boolean = false;
  editExperience:Boolean = false;
  sessionSwitch:Boolean;

  experienceItem:Experience = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    job:''
  }

  constructor(private dataService: GetDataService,
              private userService:UserService) {}

  ngOnInit(): void {
    this.dataService.getData('experience').subscribe ( response => {
      this.data = response})
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  remove(id:String) {
    this.dataService.deleteElement('experience',id).subscribe (
      response => {this.ngOnInit()})
  }

  getElement(id:string) {
    this.dataService.getElement('experience', id).subscribe (
      response => {this.experienceItem = response})
  }

  openAddExperience() {
    if(this.addExperience) {
      this.addExperience = false;
    } else {
      this.addExperience = true;
    }
    return false;
  }

  openEditExperience() {
    if(this.editExperience) {
      this.editExperience = false;
    } else {
      this.editExperience = true;
    }
    return false;
  }
}
