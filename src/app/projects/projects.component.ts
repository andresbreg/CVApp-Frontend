import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { UserService } from '../services/user.service';
import { Project } from '../model/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  data:any = [];

  addProject:Boolean = false;
  editProject:Boolean = false;
  sessionSwitch:Boolean;

  projectItem:Project = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    description:'',
    link:''
  }

  constructor(private dataService: GetDataService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.dataService.getData('projects').subscribe ( response => {
      this.data = response})
    this.userService.session.subscribe((value: Boolean) => {
      this.sessionSwitch = value;
    });
  }

  remove(id:String) {
    this.dataService.deleteElement('projects', id).subscribe (
      response => {this.ngOnInit()})
  }

  getElement(id:string) {
    this.dataService.getElement('projects', id).subscribe (
      response => {this.projectItem = response})
  }

  openAddProject() {
    if(this.addProject) {
      this.addProject = false;
    } else {
      this.addProject = true;
    }
    return false;
  }

  openEditProject() {
    if(this.editProject) {
      this.editProject = false;
    } else {
      this.editProject = true;
    }
    return false;
  }
}
