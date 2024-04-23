import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/teachers.service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  previewImageUrl: string = '../../assets/newImage.png'; 
    profilePic: File | null = null;
  firstName!: string;
  lastName!: string;
  gender!: string;
  DOB!: string;
  email!: string;
  religion!: string;
  phoneNumber!: number;
  classes!: number; 
  address!: string;
  bloodGroup!: string;
  admission!: string;
  fatherName!: string;
  motherName!: string;
  fatherOccupation!: string;
 
  constructor(private student: TeachersService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.profilePic = file;
      // Update the image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  create() {
    // Ensure DOB is provided
    if (!this.DOB) {
      alert('Please enter a valid Date of Birth.');
      return;
    }

    // Convert the received DOB to the required format
    const formattedDOB = new Date(this.DOB).toISOString();

    // Prepare form data for creating teacher
    const formData = new FormData();
    if (this.profilePic) {
      formData.append('image', this.profilePic);
    }
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('fatherName', this.fatherName);
    formData.append('motherName', this.motherName);
    formData.append('fatherOccupation', this.fatherOccupation);
    formData.append('email', this.email);
    formData.append('gender', this.gender);
    formData.append('phoneNumber', this.phoneNumber.toString());
    formData.append('bloodGroup', this.bloodGroup);
    formData.append('religion', this.religion);
    formData.append('classes', this.classes.toString());
    formData.append('address', this.address);
    formData.append('date', new Date(this.DOB).getDate().toString());
formData.append('month', (new Date(this.DOB).getMonth() + 1).toString());
formData.append('year', new Date(this.DOB).getFullYear().toString());
formData.append('hireDate', new Date(this.admission).getDate().toString()); // Corrected
formData.append('hireMonth', (new Date(this.admission).getMonth() + 1).toString()); // Corrected
formData.append('hireYear', new Date(this.address).getFullYear().toString()); // Corrected

    // Call the service method to create teacher
    this.student.createStudent(formData).subscribe(
      (res: any) => {
        alert('Student created Successfully.');
        this.router.navigate(['/students']);
      },
      (err) => {
        console.error('Student creation error:', err);
        alert(err.error.message);
      }
    );
  }


}
