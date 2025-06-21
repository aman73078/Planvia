import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  currentYear: number = new Date().getFullYear();

}
