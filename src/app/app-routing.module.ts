import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassroomComponent } from './classroom/classroom.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'home'
    },

},
{
  path: 'student',
  component: StudentComponent,
  data: {
    title: 'student'
  },
},
{
  path: 'subject',
  component: SubjectComponent,
  data: {
    title: 'subject'
  },
},
{
  path: 'classroom',
  component: ClassroomComponent,
  data: {
    title: 'classroom'
  },
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
