import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticlesModule } from 'angular-particle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'experience', component: ExperienceComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: LandingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    MyprofileComponent,
    LandingComponent,
    ContactComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFontAwesomeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      // title: "auto",
      subtitle: "Percent",
      titleFontSize: "24",
      subtitleFontSize: "18",
      titleColor:"#ffffff",
      subtitleColor: "#ffffff"
    }),
    ParticlesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
