import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  data:any=[];

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('skills').subscribe ( response => {
      this.data = response;
    });
  }
}
