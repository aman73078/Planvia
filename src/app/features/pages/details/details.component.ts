import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  currentYear: number = new Date().getFullYear();
  showCard1 = true;
  showCard2 = false;

  @ViewChild('typingCard1') typingCard1!: ElementRef;
  @ViewChild('typingCard2') typingCard2!: ElementRef;

  private card1Text = "Boost your team's productivity with streamlined task tracking and communication.";
  private card2Text = "Customize your project flow with visual boards, statuses, and user roles.";

  ngAfterViewInit(): void {
    this.startLoop();
  }

  startLoop(): void {
    const loop = async () => {
      // First Card
      this.showCard1 = true;
      this.showCard2 = false;

      await this.delay(100); // Let Angular render card 1
      await this.typeEffect(this.typingCard1.nativeElement, this.card1Text);
      await this.delay(1000);
      await this.deleteEffect(this.typingCard1.nativeElement);

      // Second Card
      this.showCard1 = false;
      this.showCard2 = true;

      await this.delay(100); // Let Angular render card 2
      setTimeout(async () => {
        await this.typeEffect(this.typingCard2.nativeElement, this.card2Text);
        await this.delay(1000);
        await this.deleteEffect(this.typingCard2.nativeElement);
        this.showCard2 = false;

        setTimeout(loop, 500); // Restart loop
      }, 100);
    };

    loop();
  }

  async typeEffect(element: HTMLElement, text: string): Promise<void> {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
      element.textContent += text.charAt(i);
      await this.delay(30);
    }
  }

  async deleteEffect(element: HTMLElement): Promise<void> {
    const text = element.textContent || '';
    for (let i = text.length; i > 0; i--) {
      element.textContent = text.substring(0, i - 1);
      await this.delay(20);
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
