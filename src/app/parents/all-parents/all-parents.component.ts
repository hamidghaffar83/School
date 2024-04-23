import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentsService } from 'src/app/parents.service';
import { TeachersService } from 'src/app/teachers.service';
declare var $: any;

@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrls: ['./all-parents.component.scss']
})
export class AllParentsComponent implements OnInit {

  searchTerm: string = '';
  selectedClass: string = '';
  filteredParents: any[] = []; 

  constructor(private route: Router, private parents:ParentsService) { }

  ngOnInit(): void {
    this.parents.getAllParents().subscribe((response: any) => {
      if (response.success) {
        this.parentsData = response.data;
        this.filteredParents = response.data;
      } else {
        console.error('Failed to fetch Parents:', response.message);
      }
    });
  }
  editParent(parentId: string) {
    this.route.navigate(['/edit-parent', parentId]);
  }


  isHomeRoute(): boolean {
    return this.route.isActive('', true);
  }

  parentsData: any[] = [];
  currentPage = 0;
  itemsPerPage = 10;

  getPaginatedData() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredParents.length);
    return this.filteredParents.slice(startIndex, endIndex);
  }

  onNextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.filteredParents.length) {
      this.currentPage++;
    }
  }

  onPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  searchParent() {
    this.filteredParents = this.parentsData.filter((parentsData) =>
      parentsData.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (!this.selectedClass || parentsData.classes === this.selectedClass)
    );

    this.currentPage = 0;
  }
  toggleDropdown(event: Event) {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    target.querySelector('.dropdown-content')?.classList.toggle('show');
  }

}
