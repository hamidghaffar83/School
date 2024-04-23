import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllParentsComponent } from './all-parents/all-parents.component';
import { EditParentsComponent } from './edit-parents/edit-parents.component';
import { SedMessageComponent } from './sed-message/sed-message.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllParentsComponent,
    EditParentsComponent,
    SedMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule  ],
  exports: [
    AllParentsComponent,
    EditParentsComponent,
    SedMessageComponent
  ]
})
export class ParentsModule { }
