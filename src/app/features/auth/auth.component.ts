import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLogin = true;
  authData = { name: '', email: '', password: '', confirmPassword: '' };

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.authData = { name: '', email: '', password: '', confirmPassword: '' };
  }

  submitForm() {
    if (!this.isLogin && this.authData.password !== this.authData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(this.isLogin ? 'Logged in successfully!' : 'Account created successfully!');
  }
}
