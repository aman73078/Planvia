import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  private card1Text = "Boost your team's productivity with streamlined task tracking and communication.";
  private card2Text = "Customize your project flow with visual boards, statuses, and user roles.";
  workflowSteps = [
  { icon: '👤', title: 'Signup', description: 'Create your account and onboard your team.' },
  { icon: '📁', title: 'Create Project', description: 'Organize your work into boards and sprints.' },
  { icon: '✅', title: 'Assign Tasks', description: 'Delegate responsibilities efficiently.' },
  { icon: '📊', title: 'Track Progress', description: 'Monitor work in real-time.' },
  { icon: '📈', title: 'Reports', description: 'Get visual insights and analytics.' }
];

features = [
  { icon: '🧩', title: 'Intuitive Task Boards', description: 'Visual Kanban-style boards with drag-and-drop support.' },
  { icon: '👥', title: 'Team Collaboration', description: 'Real-time teamwork with comments, mentions, and more.' },
  { icon: '📊', title: 'Real-Time Reporting', description: 'Track performance and metrics instantly.' },
  { icon: '🔒', title: 'Secure & Scalable', description: 'Advanced encryption and role-based access.' },
  { icon: '⚙️', title: 'Custom Workflows', description: 'Flexible flows tailored to your team’s process.' },
  { icon: '🔔', title: 'Smart Notifications', description: 'Keep everyone aligned with smart alerts.' }
];

  ngAfterViewInit(): void {
  }
}
