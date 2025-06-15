import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from '../../../shared/side-nav/side-nav.component';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    FormsModule,
    NgbTooltip,
    SideNavComponent,
    DialogComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedTeamLead: string = '';

  projects = [
    {
      title: 'Website Redesign',
      status: 'In Progress',
      openTasks: 12,
      totalTasks: 25,
      teamLead: 'Jane Doe',
      clientName: 'Acme Corp',
    },
    {
      title: 'Mobile App',
      status: 'Development',
      openTasks: 18,
      totalTasks: 30,
      teamLead: 'Emily Davis',
      clientName: 'TechNova',
    },
    {
      title: 'Marketing Campaign',
      status: 'Planning',
      openTasks: 5,
      totalTasks: 10,
      teamLead: 'Kishor M',
      clientName: 'Globex Inc',
    },
  ];

  @ViewChild('createProject') createProject!: ElementRef;
  @ViewChild(DialogComponent) dialogComponent!: DialogComponent;

  teamMembers = [
    { name: 'Alice Johnson', role: 'Admin' },
    { name: 'Bob Smith', role: 'Developer' },
    { name: 'Charlie Lee', role: 'Designer' }
  ];

  step = 1;
  project: any = {};
  teamLeads = ['Alice', 'Bob', 'Charlie'];
  invitedEmails: string[] = [''];
  roles: string[] = [];
  constructor(private router: Router, private ngbModal: NgbModal) {}

  filteredProjects() {
    return this.selectedTeamLead
      ? this.projects.filter((p) => p.teamLead === this.selectedTeamLead)
      : this.projects;
  }

  filtered(lead: string) {
    this.selectedTeamLead = this.selectedTeamLead === lead ? '' : lead; // toggle filter
  }

  get uniqueTeamLeads(): string[] {
    return [...new Set(this.projects.map((p) => p.teamLead))];
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }

  getColorForLead(name: string): string {
    const colors: { [key: string]: string } = {
      'Jane Doe': '#28a745',
      'Emily Davis': '#ffc107',
      'Kishor M': '#dc3545',
    };
    return colors[name] || '#6c757d'; // default gray
  }

  createNewProject() {
    let createProjectModal = this.ngbModal.open(this.createProject, { fullscreen: true });
  }

  editProject(project: any): void {
    // You can navigate to an edit form or open a modal
    console.log('Editing project:', project);
    // Example: this.router.navigate(['/edit-project', project.id]);
  }

  deleteProject(project: any): void {
    const confirmed = confirm(
      `Are you sure you want to delete "${project.title}"?`
    );
    if (confirmed) {
      this.projects = this.projects.filter((p) => p !== project);
      console.log('Project deleted:', project);
    }
  }

  // project = {
  //   title: '',
  //   projectKey: '',
  //   clientName: '',
  //   teamLead: '',
  //   projectType: '',
  //   status: '',
  //   startDate: '',
  //   endDate: '',
  //   description: '',
  // };

  addProject() {
    if (!this.project.title) {
      alert('Project name is required!');
      return;
    }

    // Clone the new project to avoid reference issues
    const newProject: any = { ...this.project };

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
      description: '',
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

  // teamLeads = ['Jane Doe', 'Emily Davis', 'Kishor M'];

  onSubmit() {
    console.log('Project data:', this.project);
    // Call API or service to create project here
    this.router.navigate(['/dashboard']);
  }

  // onCancel() {
  //   this.router.navigate(['/dashboard']);
  // }

  

  openInviteModal() {
    // Open modal to invite new team member
  }

  openTeamList() {
    // Navigate to team management page
  }

  inviteTeam(){
    let model = this.ngbModal.open(this.dialogComponent,{fullscreen:true})
  }

  nextStep() {
    if (this.step === 2) {
      this.roles = this.invitedEmails.map(() => 'Viewer');
    }
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addEmail() {
    this.invitedEmails.push('');
  }

  removeEmail(index: number) {
    this.invitedEmails.splice(index, 1);
    this.roles.splice(index, 1);
  }

  onCancel() {
    // Handle cancel logic or modal dismiss
    this.step = 1;
    this.project = {};
    this.invitedEmails = [''];
    this.roles = [];
  }

  submitProject() {
    const finalProject = {
      ...this.project,
      team: this.invitedEmails.map((email, i) => ({
        email,
        role: this.roles[i]
      }))
    };
    console.log('Final Project:', finalProject);
    // Submit to API or service
  }
}
