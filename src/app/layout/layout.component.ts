import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../features/components/dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,CommonModule, NgbDropdownModule, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
   currentYear: number = new Date().getFullYear();
  isProjectsExpanded = false;
toggleProjects() {
    this.isProjectsExpanded = !this.isProjectsExpanded;
  }

  logOut(){}
}
