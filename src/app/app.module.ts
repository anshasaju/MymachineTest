import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { ViewSubjectComponent } from './subject/view-subject/view-subject.component';
import { ViewClassroomComponent } from './classroom/view-classroom/view-classroom.component';
import { AddSubjectComponent } from './classroom/add-subject/add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    SubjectComponent,
    ClassroomComponent,
    ViewStudentComponent,
    ViewSubjectComponent,
    ViewClassroomComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ],
  entryComponents: [
    ViewStudentComponent,
    ViewSubjectComponent,
    ViewClassroomComponent,
    AddSubjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
