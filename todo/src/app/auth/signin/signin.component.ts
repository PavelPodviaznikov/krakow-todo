import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {

  }

  auth() {
    this.AuthService.GoogleAuth();
  }
}
