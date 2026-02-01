import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ObfuscationService {

  private localApi = 'http://localhost:5047';
  private prodApi  = 'https://obfuscation-service-api.onrender.com';
  
  // Usar API baseada no ambiente
  private get apiBase(): string {
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
      return this.localApi;
    }
    return this.prodApi;
  }

  constructor(private http: HttpClient) {}

  encrypt(id: number): Observable<{ value: string }> {
    // Primeiro tenta a API local se estiver em desenvolvimento
    if (this.isLocalEnvironment()) {
      return this.http.get<{ value: string }>(
        `${this.localApi}/api/obfuscation/encrypt/${id}`
      ).pipe(
        catchError((localError) => {
          console.warn('API local falhou, tentando produção...', localError);
          return this.tryProdEncrypt(id);
        })
      );
    }
    
    // Em produção, usa direto a API de produção
    return this.tryProdEncrypt(id);
  }

  decrypt(value: string): Observable<number> {
    // Remove prefixo "obf_" se o usuário colocar
    const cleanValue = value.startsWith('obf_') ? value.substring(4) : value;
    
    if (this.isLocalEnvironment()) {
      return this.http.get<number>(
        `${this.localApi}/api/obfuscation/decrypt/${cleanValue}`
      ).pipe(
        catchError((localError) => {
          console.warn('API local falhou, tentando produção...', localError);
          return this.tryProdDecrypt(cleanValue);
        })
      );
    }
    
    return this.tryProdDecrypt(cleanValue);
  }

  // Métodos auxiliares privados
  private tryProdEncrypt(id: number): Observable<{ value: string }> {
    return this.http.get<{ value: string }>(
      `${this.prodApi}/api/obfuscation/encrypt/${id}`
    ).pipe(
      catchError((prodError) => {
        console.error('Todas as APIs falharam', prodError);
        return throwError(() => new Error(
          'Não foi possível conectar ao serviço de criptografia. ' +
          'Verifique sua conexão e tente novamente.'
        ));
      })
    );
  }

  private tryProdDecrypt(value: string): Observable<number> {
    return this.http.get<number>(
      `${this.prodApi}/api/obfuscation/decrypt/${value}`
    ).pipe(
      catchError((prodError) => {
        console.error('Todas as APIs falharam', prodError);
        return throwError(() => new Error(
          'Não foi possível conectar ao serviço de descriptografia. ' +
          'Verifique se o token é válido e tente novamente.'
        ));
      })
    );
  }

  private isLocalEnvironment(): boolean {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
  }
}
