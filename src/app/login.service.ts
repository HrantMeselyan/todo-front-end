import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
