import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule,FormsModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  private offcanvasService = inject(NgbOffcanvas);
  openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true, panelClass: 'custom-offcanvas-full' });
	}

  projects: any[] = [
  // existing projects here
];

project = {
  title: '',
  projectKey: '',
  clientName: '',
  teamLead: '',
  projectType: '',
  status: '',
  startDate: '',
  endDate: '',
  description: ''
};

addProject() {
  if (!this.project.title) {
    alert('Project name is required!');
    return;
  }

  // Clone the new project to avoid reference issues
  const newProject:any = { ...this.project };

  // You can also set defaults or generate ID here if needed
  newProject.status = newProject.status || 'Not Started';
  newProject.openTasks = 0;
  newProject.totalTasks = 0;

  // Add the new project to projects list
  this.projects.push(newProject);

  // Reset form (optional)
  this.project = {
    title: '',
    projectKey: '',
    clientName: '',
    teamLead: '',
    projectType: '',
    status: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  // Optionally close the form modal or give feedback
  alert('Project created successfully!');
}


getProjectTypeIcon(): string {
  switch (this.project.projectType) {
    case 'Software Development':
      return 'bi bi-code-slash';
    case 'Marketing':
      return 'bi bi-megaphone-fill';
    case 'Business':
      return 'bi bi-briefcase-fill';
    case 'Operations':
      return 'bi bi-gear-fill';
    default:
      return 'bi bi-kanban-fill'; // default icon
  }
}


  teamLeads = ['Jane Doe', 'Emily Davis', 'Kishor M'];

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Project data:', this.project);
    // Call API or service to create project here
    this.router.navigate(['/dashboard']);
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
