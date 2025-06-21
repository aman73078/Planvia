import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  selectedTab: string = 'summary';

tabs = [
  { key: 'summary', label: 'Summary' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'backlog', label: 'Backlog' },
  { key: 'board', label: 'Board' },
  { key: 'list', label: 'List' },
  { key: 'allWork', label: 'All Work' },
  { key: 'more', label: 'More' }
];

onSelectTab(tab: string) {
  this.selectedTab = tab;
}

}
