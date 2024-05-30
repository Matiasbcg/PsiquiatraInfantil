import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginPage {
  loginForm: FormGroup;
  showToast = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastController: ToastController,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]],
      password: ['', [Validators.required, Validators.minLength(4), this.passwordValidator]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const registeredUser = this.userService.getRegisteredUser();

      if (registeredUser && registeredUser.correo === email && registeredUser.password === password) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']);
      } else {
        this.presentToast();
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      return { passwordInvalid: true };
    }
    return null;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cuenta inválida',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}





