import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentsService } from 'src/app/parents.service';

@Component({
  selector: 'app-edit-parents',
  templateUrl: './edit-parents.component.html',
  styleUrls: ['./edit-parents.component.scss']
})
export class EditParentsComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  fatherName: string = '';
  motherName: string = '';
  email: string = '';
  phoneNumber: number = 0;
  religion: string = '';
  fatherOccupation: string = '';
  address: string = '';
  parentId: string = '';
  parentData: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parentService: ParentsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parentId = params['id'];
      this.parentService.getParentById(this.parentId).subscribe((data: any) => {
        this.parentData = data;
        this.firstName = this.parentData.firstName;
        this.lastName = this.parentData.lastName;
        this.fatherName = this.parentData.fatherName;
        this.motherName = this.parentData.motherName;
        this.email = this.parentData.email;
        this.phoneNumber = this.parentData.phoneNumber;
        this.religion = this.parentData.religion;
        this.fatherOccupation = this.parentData.fatherOccupation;
        this.address = this.parentData.address;
      });
    });

  }

  update() {
    const updatedParentData = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      motherName: this.motherName,
      phoneNumber: this.phoneNumber,
      religion: this.religion,
      fatherOccupation: this.fatherOccupation,
      address: this.address
    };

    this.parentService.editParent(this.parentId, updatedParentData).subscribe((res: any) => {
      alert('Parent updated Successfully.');
      this.router.navigate(['/parents']);
    }, (err) => {
      console.error('Error updating parent:', err.message);
      alert(err.error.message);
    });
  }
}
