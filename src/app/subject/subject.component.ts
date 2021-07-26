import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewSubjectComponent } from './view-subject/view-subject.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subjectList: any;

  constructor(private http : HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/subjects?api_key=7C04B')
    .subscribe((res: any) => {
      this.subjectList = res.subjects; 
    }
    );
  }

  view(data){
    const activeModal = this.modalService.open(ViewSubjectComponent, {
      backdrop: true, centered: true, windowClass: 'modal-danger'
    });
    activeModal.componentInstance.modalHeader = "subject";
    activeModal.componentInstance.data = JSON.parse(
      JSON.stringify(data)
    );
  }

}
