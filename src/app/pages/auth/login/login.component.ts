import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  standalone: true
})
export class LoginComponent  implements OnInit {

  isLoginPhone: boolean = true

  loginPhoneForm: FormGroup = this.fb.group({});
  loginEmailForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }


  login() {
    if (this.isLoginPhone && this.loginPhoneForm.valid) {
      this.authService.login(this.loginPhoneForm.value).subscribe(
        (response) => {
          console.log('Успішний вхід:', response);
          this.router.navigate(['profile'])
        },
        (error) => {
          console.error('Помилка вхіду:', error);
        }
      );
    } else if (!this.isLoginPhone && this.loginEmailForm.valid){
      this.authService.login(this.loginEmailForm.value).subscribe(
        (response) => {
          console.log('Успішний вхід:', response);
          this.router.navigate(['profile'])

        },
        (error) => {
          console.error('Помилка вхіду:', error);
        }
      );
    }
  }

  ngOnInit() {
    if (this.isLoginPhone) {
      this.loginPhoneForm = this.fb.group({
        phone: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    } else {
      this.loginEmailForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }
  }

}
