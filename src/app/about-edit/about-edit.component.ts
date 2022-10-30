import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { About } from '../model/model';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  @Input() aboutItem:About = {
    location:'',
    phoneNumber:'',
    email:'',
    about:''
  }

  constructor(private dataService:GetDataService) {}

  ngOnInit(): void {
  }

  updateElement() {
    this.dataService.editElement('about', this.aboutItem, '1').subscribe (
      response => {location.reload()}
    );
  }
}
