import { Component, OnInit} from '@angular/core';
import { GetDataService } from './../services/get-data.service';
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

  educationItem:Education = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    course:''
  }

  constructor(private dataService:GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('education').subscribe ( response => {
      this.data = response})
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
