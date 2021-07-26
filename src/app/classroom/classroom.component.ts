import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewClassroomComponent } from './view-classroom/view-classroom.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  classList: any;

  constructor(private http : HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/classrooms?api_key=7C04B')
    .subscribe((res: any) => {
      this.classList = res.classrooms; 

    }
    );
  }

  view(data){
    const activeModal = this.modalService.open(ViewClassroomComponent, {
      backdrop: true, centered: true, windowClass: 'modal-danger'
    });
    activeModal.componentInstance.modalHeader = "classroom";
    activeModal.componentInstance.data = JSON.parse(
      JSON.stringify(data)
    );
  }

  AddSubject(){
    const activeModal = this.modalService.open(AddSubjectComponent, {
      backdrop: true, centered: true, windowClass: 'modal-danger'
    });
    activeModal.componentInstance.modalHeader = "classroom";
  }

}
