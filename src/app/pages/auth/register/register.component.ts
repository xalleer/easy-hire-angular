import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  standalone: true
})
export class RegisterComponent {


  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Форма відправлена:', this.registerForm.value);

      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Реєстрація успішна:', response);
        },
        (error) => {
          console.error('Помилка реєстрації:', error);
        }
      );

    }
  }



}
