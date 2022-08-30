import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { UserService } from '../services/user.service';
import { Skill } from '../model/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  data:any = [];

  addSkill:Boolean = false;
  editSkill:Boolean = false;
  sessionSwitch:Boolean;

  skillItem:Skill = {
    id:'',
    logoUrl:'',
    name:'',
    skillLevel:''
  }

  constructor(private dataService: GetDataService,
              private userService:UserService) {}

  ngOnInit(): void {
    this.dataService.getData('skills').subscribe ( response => {
      this.data = response})
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  remove(id:String) {
    this.dataService.deleteElement('skills',id).subscribe (
      response => {this.ngOnInit()})
  }

  getElement(id:string) {
    this.dataService.getElement('skills', id).subscribe (
      response => {this.skillItem = response})
  }

  openAddSkill() {
    if(this.addSkill) {
      this.addSkill = false;
    } else {
      this.addSkill = true;
    }
    return false;
  }

  openEditSkill() {
    if(this.editSkill) {
      this.editSkill = false;
    } else {
      this.editSkill = true;
    }
    return false;
  }
}
