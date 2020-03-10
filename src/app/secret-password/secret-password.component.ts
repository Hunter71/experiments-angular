import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretpass',
  templateUrl: './secret-password.component.html',
  styleUrls: ['./secret-password.component.css']
})
export class SecretPasswordComponent implements OnInit {
  secretPassword = 'Ola';
  secretPasswordVisible = false;
  secretPasswordDisplayRegister: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDisplayDetails(): void {
    this.secretPasswordVisible = !this.secretPasswordVisible;
    if (this.secretPasswordVisible) {
      this.registerClick();
    }
  }

  registerClick(): void {
    const now = new Date().toLocaleString();
    this.secretPasswordDisplayRegister.push(`Click ${this.clickCount() + 1}: ${now}`);
  }

  clickCount(): number {
    return this.secretPasswordDisplayRegister.length;
  }
}
