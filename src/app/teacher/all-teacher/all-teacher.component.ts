import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/teachers.service';

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.scss']
})
export class AllTeacherComponent implements OnInit {
  searchTerm: string = '';
  selectedClass: string = '';
  filteredTeachers: any[] = []; 

  constructor(private route: Router, private teacher: TeachersService) { }

  ngOnInit(): void {
    this.teacher.getAllTeachers().subscribe((response: any) => {
      if (response.success) {
        this.teacherData = response.data;
        // Initialize filteredTeachers with all teachers data initially
        this.filteredTeachers = response.data;
      } else {
        console.error('Failed to fetch Teachers:', response.message);
      }
    });
  }

  isHomeRoute(): boolean {
    return this.route.isActive('', true);
  }

  teacherData: any[] = [];
  currentPage = 0;
  itemsPerPage = 10;

  getPaginatedData() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredTeachers.length);
    return this.filteredTeachers.slice(startIndex, endIndex);
  }

  onNextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.filteredTeachers.length) {
      this.currentPage++;
    }
  }

  onPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  searchTeachers() {
    this.filteredTeachers = this.teacherData.filter((teacher) =>
      teacher.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (!this.selectedClass || teacher.classes === this.selectedClass)
    );

    this.currentPage = 0;
  }
}
