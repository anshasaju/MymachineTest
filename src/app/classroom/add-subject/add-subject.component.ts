import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  subjectForm:FormGroup;
  subjectList:any;

  constructor(private http : HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.subjectForm = this.formBuilder.group({
      subject:["",Validators.required],
    });

    this.http.get(' https://hamon-interviewapi.herokuapp.com/subjects?api_key=7C04B')
    .subscribe((res: any) => {
      this.subjectList = res.subjects; 
    }
    );
  }
  get f() { return this.subjectForm.controls; }
  onSubmit(){
    
      let data = {
        subject: this.subjectForm.value.subject,
        
    };
    console.log(data)
    this.http.post < any > ('https://hamon-interviewapi.herokuapp.com/classrooms/data?api_key=7C04B', this.subjectForm.value)
        .subscribe((jsondata: any) => {
          if (jsondata != null) {
            console.log(jsondata);
            this.subjectForm.reset();
            this.router.navigate(["/"]);
          } 
        })
   

  }

}
