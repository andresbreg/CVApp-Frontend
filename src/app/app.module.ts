import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import { EducationAddComponent } from './education-add/education-add.component';
import { ExperienceAddComponent } from './experience-add/experience-add.component';
import { SkillAddComponent } from './skill-add/skill-add.component';

import { environment } from '../environments/environment';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { AboutEditComponent } from './about-edit/about-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    LoginComponent,
    EducationAddComponent,
    EducationEditComponent,
    ExperienceAddComponent,
    ExperienceEditComponent,
    SkillAddComponent,
    SkillEditComponent,
    AboutEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
