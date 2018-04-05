import { StudentDataComponent } from "./student/student-data/student-data.component";
import { StudentFormComponent } from "./student/student-form/student-form.component";
import { StudentAppComponent } from "./student/student-app/student-app.component";
import {RouterModule} from "@angular/Router";
import { StudentHomeComponent } from "./student-home/student-home.component";
import { AuthorizationGuards } from "./guards/auth-guards";
import { UnauthorizationGuard } from "./guards/unAuth-guard";

const ROUTES = [
    {path:'', component:StudentHomeComponent},
    {path:"data", component:StudentDataComponent},
    {path:"form", component:StudentFormComponent, canActivate:[AuthorizationGuards]},  
    {path:'app', loadChildren:'app/student/student.module#StudentModule', canActivate:[AuthorizationGuards]},
    {path:'**', redirectTo:""}
]

export const STUDENT_ROUTES = RouterModule.forRoot(ROUTES);