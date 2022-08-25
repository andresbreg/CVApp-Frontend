import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  data:any=[];
  addSkill:Boolean = false;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('skills').subscribe ( response => {
      this.data = response;
    });
  }

  remove(id:String) {
    this.dataService.deleteElement('skills',id).subscribe (
      response => {this.ngOnInit()}
    );
  }

  openAddSkill() {
    if(this.addSkill) {
      this.addSkill = false;
    } else {
      this.addSkill = true;
    }
    return false;
  }
}
