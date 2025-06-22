import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private authService:AuthService,private route:Router){}
  toggleMode() {
    this.isLogin = !this.isLogin;
    this.authData = { name: '', email: '', password: '', confirmPassword: '' };
  }

  submitForm() {
    if (!this.isLogin && this.authData.password !== this.authData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }else if(this.isLogin){
      
      let userData = this.authService.login(this.authData)
      if(userData){
        this.route.navigate(['/dashboard/projects']);
        console.log('authData',this.authData);
      }
      // alert(this.isLogin ? 'Logged in successfully!' : 'Account created successfully!');
    }
  }
}
