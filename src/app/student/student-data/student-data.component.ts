import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../Student';
import { Programs } from '../../Programs';
import { StudentService } from '../../student.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router, private routerOne:Router) { }

 
  studentData: Array<Student> =  this.studentService.getStudentData();
  ngOnInit() {
   // this.studentData = this.studentService.getStudentData();
  }

  handleClick(){
    //this.routerOne.navigate(['/customerHome', true, false]);
   this.router.navigate(['/customerHome',true]);
  }
}
