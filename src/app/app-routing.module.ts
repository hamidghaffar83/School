import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { ResetComponent } from './reset/reset.component';
import { ProfileComponent } from './profile/profile.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AllTeacherComponent } from './teacher/all-teacher/all-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { StudentFeeComponent } from './student/student-fee/student-fee.component';
import { AllParentsComponent } from './parents/all-parents/all-parents.component';
import { EditParentsComponent } from './parents/edit-parents/edit-parents.component';
import { SedMessageComponent } from './parents/sed-message/sed-message.component';

const routes: Routes = [
  
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'email',
    component:EmailComponent
  },
  {
    path:'password',
    component:PasswordComponent
  },
  {
    path:'otp',
    component:ResetComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }, {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'chart',
    component:LineChartComponent
  },
  {
    path:'teachers',
    component: AllTeacherComponent
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent
  },
  {
    path: 'students',
    component: AllStudentComponent
  },
  {
    path: 'add-student',
    component: CreateStudentComponent
  },
  {
    path: 'student-fee',
    component: StudentFeeComponent
  },
  {
    path: 'parents',
    component: AllParentsComponent
  },
  {
    path: 'edit-parent/:id',
    component: EditParentsComponent
  },
  {
    path: 'send-message',
    component: SedMessageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
