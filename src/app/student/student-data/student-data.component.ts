import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../Student';
import { Programs } from '../../Programs';
import { StudentService } from '../../student.service';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router, 
    private activatedRoute:ActivatedRoute) { }

 
  studentData: Array<Student> =  this.studentService.getStudentData();
  id:any;
  ngOnInit() {
   // this.studentData = this.studentService.getStudentData();
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  handleClick(){
    //this.routerOne.navigate(['/customerHome', true, false]);
   this.router.navigate(['/form',true]);
  }
  handleEdit(studentValue){
    this.studentService.handleEdit(studentValue = this.studentData.length-1);
    this.router.navigate(['/form']);
  }
  handleDelete(studentToDelete){
    this.studentService.handleDelete(studentToDelete);
  }
}
