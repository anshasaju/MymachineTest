import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-classroom',
  templateUrl: './view-classroom.component.html',
  styleUrls: ['./view-classroom.component.scss']
})
export class ViewClassroomComponent implements OnInit {
  data:any;
  classData:any;

  constructor(public activeModal: NgbActiveModal,private http : HttpClient) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/classrooms/data.id?api_key=7C04B')
    .subscribe((res: any) => {
      this.classData = res.classrooms; 
    }
    );
  }

  close() {
    this.activeModal.close();
  }

}
