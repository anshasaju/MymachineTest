import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  data:any;
  studentData:any;

  constructor(public activeModal: NgbActiveModal,private http : HttpClient) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/students/data.id?api_key=7C04B')
    .subscribe((res: any) => {
      this.studentData = res.students; 
    }
    );
  }
  close() {
    this.activeModal.close();
  }


}
