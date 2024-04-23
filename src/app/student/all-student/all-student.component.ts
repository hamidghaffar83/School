import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/teachers.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  searchTerm: string = '';
  selectedClass: string = '';
  filteredStudent: any[] = []; 

  constructor(private route: Router, private student:TeachersService) { }

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((response: any) => {
      if (response.success) {
        this.studentsData = response.data;
        // Initialize filteredTeachers with all teachers data initially
        this.filteredStudent = response.data;
      } else {
        console.error('Failed to fetch Teachers:', response.message);
      }
    });
  }

  isHomeRoute(): boolean {
    return this.route.isActive('', true);
  }

  studentsData: any[] = [];
  currentPage = 0;
  itemsPerPage = 10;

  getPaginatedData() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredStudent.length);
    return this.filteredStudent.slice(startIndex, endIndex);
  }

  onNextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.filteredStudent.length) {
      this.currentPage++;
    }
  }

  onPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  searchStudent() {
    this.filteredStudent = this.studentsData.filter((studentsData) =>
      studentsData.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (!this.selectedClass || studentsData.classes === this.selectedClass)
    );

    this.currentPage = 0;
  }
}
