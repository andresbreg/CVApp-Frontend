import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  data:any;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('about').subscribe ( response => {
      this.data = response;
    });
  }
}
