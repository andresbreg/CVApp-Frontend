import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutEditComponent } from './about-edit/about-edit.component';
import { EducationComponent } from './education/education.component';
import { EducationAddComponent } from './education-add/education-add.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillAddComponent } from './skill-add/skill-add.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceAddComponent } from './experience-add/experience-add.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

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
    AboutEditComponent,
    RegisterFormComponent,
    ProjectAddComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
