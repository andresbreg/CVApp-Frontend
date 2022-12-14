import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  data:any = [];

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData('about').subscribe ( response => {
      this.data = response;
    });
  }
}
