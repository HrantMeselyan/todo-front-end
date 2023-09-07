import { Component } from '@angular/core';
import {RegistrationService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService, private router: Router) {}

  registerUser(user: any) {
    this.registrationService.register(user).subscribe(
      (response: any) => {
        // Handle successful registration and JWT token here
        const token = response.token;
        localStorage.setItem('token', token); // Store the token securely
        this.router.navigate(['/dashboard']); // Redirect to the dashboard or any other route
      },
      (error: any) => {
        // Handle registration error here
      }
    );
  }
}
