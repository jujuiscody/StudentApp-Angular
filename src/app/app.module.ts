import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './student.service';
import { STUDENT_ROUTES } from './App.Routing';
import { AuthorizationGuards } from './guards/auth-guards';
import { UnauthorizationGuard } from './guards/unAuth-guard';
import { StudentHomeComponent } from './student-home/student-home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    STUDENT_ROUTES,
  ],
  providers: [StudentService, AuthorizationGuards, UnauthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
