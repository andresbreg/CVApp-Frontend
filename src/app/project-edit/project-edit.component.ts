import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Storage, ref, uploadBytes, getDownloadURL } from "@angular/fire/storage";
import { Project } from '../model/model';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent implements OnInit {

  file:any = [];
  filePreview:string;

  @Input() receivedId:string;
  @Input() projectItem:Project = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    description:'',
    link:''
  }

  constructor(private dataService:GetDataService,
              private sanitizer:DomSanitizer,
              private storage:Storage) { }

  ngOnInit(): void {
  }

  catchFile(event): any {
    const catchedFile = event.target.files[0];
    this.extractBase64(catchedFile).then ( (image:any) => {
      this.filePreview = image.base;
      console.log(image);
    });
  }

  extractBase64 = async ($event:any) => new Promise ((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve ({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve ({
          base: null
        });
      };
    } catch (e) {
      return null;
  }})

  uploadImage($event:any) {
    const file = $event.target.files[0];
    console.log(file);
    // Referencia
    const storageReference = ref(this.storage, `imagenes/${file.name}`);
    // Subiendo archivo
    uploadBytes(storageReference, file)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    // Guardando URL
    getDownloadURL(storageReference)
      .then(url =>  {
        this.projectItem.logoUrl = url
        console.log(this.projectItem.logoUrl)
      })
      .catch(error => console.log(error))
  }

  updateElement() {
    this.dataService.editElement('projects', this.projectItem, this.projectItem.id).subscribe (
      response => {location.reload()}
    );
  }
}
