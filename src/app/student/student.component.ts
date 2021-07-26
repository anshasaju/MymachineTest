import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewStudentComponent } from './view-student/view-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentList: any;
  list: any =[];
  page11: number = 1;

  constructor(private http : HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/students?api_key=7C04B')
    .subscribe((res: any) => {
      this.studentList = res.students; 
    }
    );
    
  }

  view(data){
    const activeModal = this.modalService.open(ViewStudentComponent, {
      backdrop: true, centered: true, windowClass: 'modal-danger'
    });
    activeModal.componentInstance.modalHeader = "student";
    activeModal.componentInstance.data = JSON.parse(
      JSON.stringify(data)
    );
  }

}
