import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authn',
  templateUrl: './authn.component.html',
  styleUrls: ['./authn.component.css']
})
export class AuthnComponent implements OnInit {
  registeredActionProcessed = false;
  registeredUserStatus = 'No user registered';
  username: string;

  constructor() {
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
