import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTeacherComponent } from './all-teacher/all-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllTeacherComponent,
    AddTeacherComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule  ],
  exports: [
    AllTeacherComponent,
    AddTeacherComponent
  ]
})
export class TeacherModule { }
