import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private authService: AuthService, private router: Router) {}

  registerWithEmail() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(userCredential => {
        alert(`Registrazione avvenuta con successo. Benvenuto ${userCredential.user?.email}`);
        this.router.navigate(['/'])
      })
      .catch(error => {
        alert('Errore durante la registrazione: ' + error.message);
      });
  }
}
