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

  projects: any[] = [
  {
    title: 'Website Redesign',
    projectKey: 'WRD2025',
    clientName: 'Acme Corp',
    teamLead: 'Jane Doe',
    projectType: 'Software Developement',
    status: 'In Progress',
    startDate: '2025-05-01',
    endDate: '2025-08-30',
    description: 'Redesigning the company website to improve user experience and mobile responsiveness.',
  },
  {
    title: 'Mobile App Launch',
    projectKey: 'MAL2025',
    clientName: 'TechNova',
    teamLead: 'John Smith',
    projectType: 'Marketing',
    status: 'Planning',
    startDate: '2025-07-01',
    endDate: '2025-12-15',
    description: 'Developing a cross-platform mobile app for on-the-go financial tracking.',
  },
  {
    title: 'Cloud Migration',
    projectKey: 'CMG2025',
    clientName: 'HealthPro',
    teamLead: 'Emily Clark',
    projectType: 'Business',
    status: 'Completed',
    startDate: '2025-01-15',
    endDate: '2025-04-30',
    description: 'Migrated existing data centers to AWS cloud services with improved security.',
  },
  {
    title: 'AI Chatbot Integration',
    projectKey: 'ACI2025',
    clientName: 'RetailNet',
    teamLead: 'Michael Lee',
    projectType: 'Operations',
    status: 'In Progress',
    startDate: '2025-06-01',
    endDate: '2025-09-30',
    description: 'Integrating an AI-powered chatbot to enhance customer service response time.',
  },
  {
    title: 'Internal HR System Upgrade',
    projectKey: 'HRU2025',
    clientName: 'Inhouse Inc.',
    teamLead: 'Sarah Nguyen',
    projectType: 'Software Developement',
    status: 'Pending',
    startDate: '2025-10-01',
    endDate: '2026-01-15',
    description: 'Upgrading the internal HR management platform with new performance tracking features.',
  }
];


  @ViewChild('createProject') createProject!: ElementRef;
  @ViewChild(DialogComponent) dialogComponent!: DialogComponent;

  teamMembers = [
    { name: 'Jane Doe', role: 'Admin' },
    { name: 'John Smith', role: 'Developer' },
    { name: 'Emily Clark', role: 'Designer' },
    { name: 'Michael Lee', role: 'Designer' },
    { name: 'Sarah Nguyen', role: 'Designer' },
  ];
  projectCategory:any[] = [
    {projectType:'Software Developement', projectIcon:'bi bi-code-slash'},
    {projectType:'Marketing', projectIcon:'bi bi-megaphone-fill'},
    {projectType:'Business', projectIcon:'bi bi-briefcase-fill'},
    {projectType:'Operations', projectIcon:'bi bi-gear-fill'},
  ]
  private leadColors: { [key: string]: string } = {};
  step = 1;
  project: any = {};
  teamLeads = ['Jane Doe','John Smith','Emily Clark','Michael Lee','Sarah Nguyen'];
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
  if (!this.leadColors[name]) {
    // Generate a random hex color
    this.leadColors[name] = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  return this.leadColors[name];
}

  createNewProject() {
    let createProjectModal = this.ngbModal.open(this.createProject, { fullscreen: true });
  }

  editProject(project: any): void {
    // You can navigate to an edit form or open a modal
    console.log('Editing project:', project);
    // Example: this.router.navigate(['/edit-project', project.id]);
      this.project = {
      title: project.title,
      projectKey: project.projectKey,
      clientName: project.clientName,
      teamLead: project.teamLead,
      projectType: project.projectType,
      status: project.status,
      startDate: project.startDate,
      endDate: project.endDate,
      description: project.description,
    };
    let createProjectModal = this.ngbModal.open(this.createProject, { fullscreen: true });
  }

  deleteProject(project: any): void {
    const confirmed = confirm(
      `Are you sure you want to delete "${project.title}"?`
    );
    if (confirmed) {
      this.projects = this.projects.filter((p:any,index:number)=> {
        if(p.projectKey !== project.projectKey){
          return p;
        }
      });
      
      // console.log('Project deleted:', project,index);
      // this.projects.splice()
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
