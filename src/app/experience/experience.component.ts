import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  data:any;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('experience').subscribe ( response => {
      this.data = response;
    });
  }
}
