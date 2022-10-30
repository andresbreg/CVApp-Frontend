import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Storage, ref, uploadBytes, getDownloadURL } from "@angular/fire/storage";
import { Experience } from '../model/model';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})

export class ExperienceAddComponent implements OnInit {

  file:any = [];
  filePreview:string;

  newExperienceItem:Experience = {
    id:'',
    logoUrl:'',
    startDate:'',
    endDate:'',
    name:'',
    job:''
  }

  constructor(private GetDataService:GetDataService,
              private sanitizer:DomSanitizer,
              private storage:Storage) {}

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
        this.newExperienceItem.logoUrl = url
        console.log(this.newExperienceItem.logoUrl)
      })
      .catch(error => console.log(error))
  }

  saveElement() {
    this.GetDataService.addElement('experience', this.newExperienceItem).subscribe (
      response => location.reload());
  }
}
