import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged = false;
  private userEmail: string | null = null;

  setIsLogged(value: boolean) {
    this.isLogged = value;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  setUserEmail(email: string | null) {
    this.userEmail = email;
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }
}
