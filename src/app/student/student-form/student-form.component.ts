import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../../Student';
import { Programs } from '../../Programs';
import { StudentService } from '../../student.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  courses = Object.keys(Programs);

  student: Student = new Student(1, "creating", "student", "form", Programs.CS);

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {

    //this.studentService.addStudent(this.student);
  }

 
 // studentDetails: EventEmitter<Student> = new EventEmitter();
  handleSubmit(event) {
    this.studentService.addStudent(this.student);
    //console.log(event);
  }

  handleClick(){
    this.router.navigate(['/customerHome','form']);
  }
  
}
