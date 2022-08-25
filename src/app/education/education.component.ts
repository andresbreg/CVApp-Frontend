import { Component, OnInit} from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  data:any = [];
  addEducation:Boolean = false;

  constructor(private dataService:GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('education').subscribe ( response => {
      this.data = response;
    });
  }

  remove(id:String) {
    this.dataService.deleteElement('education',id).subscribe (
      response => {this.ngOnInit()}
    );
  }

  openAddEducation() {
    if(this.addEducation) {
      this.addEducation = false;
    } else {
      this.addEducation = true;
    }
    return false;
  }
}
