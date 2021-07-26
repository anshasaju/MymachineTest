import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.scss']
})
export class ViewSubjectComponent implements OnInit {
  data:any;
  subjectData:any;

  constructor(public activeModal: NgbActiveModal,private http : HttpClient) { }

  ngOnInit() {
    this.http.get(' https://hamon-interviewapi.herokuapp.com/subjects/data.id?api_key=7C04B')
    .subscribe((res: any) => {
      this.subjectData = res.subjects; 
    }
    );
  }
  close() {
    this.activeModal.close();
  }
}
