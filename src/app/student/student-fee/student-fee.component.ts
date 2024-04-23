import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/teachers.service';

@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.scss']
})
export class StudentFeeComponent implements OnInit {

email!: string;
  amount!: string;

  constructor(private student:TeachersService, private router:Router) { }

  ngOnInit(): void {
  }
  pay(){
    const sutdentData = {
      email:this.email,
      amount:this.amount
    }
    return this.student.feePay(sutdentData).subscribe((res:any) =>{
if(res.data.isPaid===true){
  alert('Student fee already collected.');
}
else{
   alert('Student fee collected Successfully.');
        this.router.navigate(['/students']);}
      },
      (err) => {
        console.error('Student fee error:', err.message);
        alert(err.error.message);
      }
    );
  }
}
