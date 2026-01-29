import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ObfuscationService {

  private localApi = 'http://localhost:5047';
  private prodApi  = 'https://obfuscation-service-api.onrender.com';

  constructor(private http: HttpClient) {}

  encrypt(id: number): Observable<{ value: string }> {
    return this.http.get<{ value: string }>(
      `${this.localApi}/api/obfuscation/encrypt/${id}`
    ).pipe(
      catchError(() =>
        this.http.get<{ value: string }>(
          `${this.prodApi}/api/obfuscation/encrypt/${id}`
        )
      )
    );
  }

  decrypt(value: string): Observable<number> {
    return this.http.get<number>(
      `${this.localApi}/api/obfuscation/decrypt/${value}`
    ).pipe(
      catchError(() =>
        this.http.get<number>(
          `${this.prodApi}/api/obfuscation/decrypt/${value}`
        )
      )
    );
  }
}
