import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngAfterViewInit(): void {
    const text = "Plan. Track. Collaborate. Like Jira, but better.";
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          typingElement.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }



}
