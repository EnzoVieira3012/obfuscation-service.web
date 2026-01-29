import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { ObfuscationService } from './obfuscation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  username = '';
  password = '';
  error = '';
  loading = false;
  statusMessage = '';

  id!: number;
  encrypted = '';
  decrypted?: number;

  constructor(
    public auth: AuthService,
    private api: ObfuscationService
  ) {}

  login() {
    this.loading = true;
    if (!this.auth.login(this.username, this.password)) {
      this.error = 'Credenciais inválidas';
      this.loading = false;
    } else {
      this.error = '';
      this.loading = false;
    }
  }

  logout() {
    this.auth.logout();
    location.reload();
  }

  encrypt() {
    if (this.id === undefined || this.id === null) return;
    
    this.statusMessage = 'Criptografando...';
    this.api.encrypt(this.id).subscribe({
      next: r => {
        this.encrypted = r.value;
        this.statusMessage = '✅ Criptografia concluída';
        setTimeout(() => this.statusMessage = '', 2000);
      },
      error: () => {
        this.encrypted = 'Erro ao encriptar!';
        this.statusMessage = '❌ Erro na criptografia';
        setTimeout(() => this.statusMessage = '', 2000);
      }
    });
  }

  decrypt() {
    if (!this.encrypted) return;
    
    this.statusMessage = 'Decriptografando...';
    this.api.decrypt(this.encrypted).subscribe({
      next: r => {
        this.id = r;
        this.statusMessage = '✅ Decriptografia concluída';
        setTimeout(() => this.statusMessage = '', 2000);
      },
      error: () => {
        this.id = 0;
        this.statusMessage = '❌ Erro na decriptografia';
        setTimeout(() => this.statusMessage = '', 2000);
      }
    });
  }
}