import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-customer-home',
  template: `
  
    <p>
      customer-home works! and id passed from student form Page:{{id}}
    </p>
    <ul>
    <li><a [routerLink]="[customerData]" routerLinkActive="active">CourseRegistration</a></li>
    <li><a [routerLink]="[customerlist]" routerLinkActive="active">CourseList</a></li>
  </ul>
 <router-outlet></router-outlet> 
  `,
  styles: []
})
export class CustomerHomeComponent implements OnInit {

  id: any;
  secondID: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.secondID = this.activatedRoute.snapshot.paramMap.getAll[this.id,this.secondID];
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }

}
