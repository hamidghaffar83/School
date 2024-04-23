import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentComponent } from './all-student/all-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentFeeComponent } from './student-fee/student-fee.component';



@NgModule({
  declarations: [
    AllStudentComponent,
    CreateStudentComponent,
    StudentFeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule  ],
  exports: [
    AllStudentComponent,
    CreateStudentComponent
  ]
})
export class StudentModule { }
