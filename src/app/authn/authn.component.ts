import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authn',
  templateUrl: './authn.component.html',
  styleUrls: ['./authn.component.css']
})
export class AuthnComponent implements OnInit {
  registeredActionProcessed: boolean;
  registeredUserStatus: string;
  username: string;

  constructor() {
    this.registeredActionProcessed = false;
    this.registeredUserStatus = 'No user registered';
    this.clearUsername();
  }

  ngOnInit(): void {
  }

  canRegisterUser(): boolean {
    return this.username !== '';
  }

  clearUsername(): void {
    this.username = '';
  }

  registerUser(): void {
    this.registeredActionProcessed = true;
    this.registeredUserStatus = `Registered user: ${this.username}`;
    this.clearUsername();
  }
}
