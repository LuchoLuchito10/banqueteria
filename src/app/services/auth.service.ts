import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Proveedor a nivel de toda la aplicación
})
export class AuthService {
  private users: { username: string; password: string; email: string}[] = [];
  private isAuthenticated = false;
  private backendUrl = 'http://localhost:8000'; // URL del backend en Django
  private tokenKey = 'authToken';

  
  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/register/`, {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/login/`, { username, password });
  }


  //getProtectedData(): Observable<any> {
    //const headers = this.createAuthHeaders();
    //return this.http.get(`${this.backendUrl}/protected/`, { headers });
  //} revisarrrrrrrrrrrrrrr
 
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Token ${token}`,
    });
  }
}













