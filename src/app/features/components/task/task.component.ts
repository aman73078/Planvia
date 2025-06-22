import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task',
  imports: [CommonModule, CdkDropList, CdkDrag, NgbAccordionModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
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
    { key: 'more', label: 'More' },
  ];

  taskList = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
  ];

  sprintList: any[] = [
    {
      sprintName: 'Sprint 1',
      taskList: [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
      ],
    },
    {
      sprintName: 'Sprint 2',
      taskList: [
        'Episode I - The Phantom Menace',
      ],
    },
    {
      sprintName: 'Sprint 3',
      taskList: [
        'Episode I - The Phantom Menace',
      ],
    },
  ];

  @HostListener('keyup', ['$event'])
  keyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('this is my');
      let task = 'Task ' + Number(this.taskList.length + 1);
      this.taskList.push(task);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
  onSelectTab(tab: string) {
    this.selectedTab = tab;
  }

  trackTask(index: number, item: string): string {
    return item;
  }

  createTask() {
    let task = 'Task' + Number(this.taskList.length + 1);
    this.taskList.push(task);
  }
}
