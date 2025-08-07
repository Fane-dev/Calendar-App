import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  private auth = inject(Auth);

  constructor(private authService: AuthService, private router: Router) {}

  loginWithEmail() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(userCredential => {
        this.authService.setIsLogged(true);
        this.authService.setUserEmail(userCredential.user?.email || null); // 👈 salva l'email
        console.log('Login completato, isLogged:', this.authService.getIsLogged());
        this.router.navigate(['/calendar']);
        alert(`Benvenuto ${userCredential.user?.email}`);
      })
      .catch(error => {
        alert('Errore: ' + error.message);
      });
  }
}
