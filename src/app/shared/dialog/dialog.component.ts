import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  imports: [FormsModule,CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  private modalService = inject(NgbModal);
  openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}
  
}
