import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  login(loginRequest: any) {
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }
}
