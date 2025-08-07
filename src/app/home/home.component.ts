import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged!: boolean;
  private auth = inject(Auth);
  private router = inject(Router);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogged = this.authService.getIsLogged();
  }

  logout() {
    signOut(this.auth).then(() => {
      this.authService.setIsLogged(false);
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Errore nel logout:', error);
    });
  }
}
