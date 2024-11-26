import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Proveedor global
})
export class SalonService {
  private backendUrl = 'http://localhost:8000'; // URL del backend

  constructor(private http: HttpClient) {}

  getSalones(): Observable<any> {
    return this.http.get(`${this.backendUrl}/salones/`); // Endpoint del backend para salones
  }
}
