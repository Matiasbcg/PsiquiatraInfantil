import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      genero: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required],
      afiliacionSalud: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreHijo: ['', Validators.required],
      edadHijo: ['', [Validators.required, Validators.max(17)]]
    }, { validators: this.passwordMatchValidator });
  }

  registrar() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.userService.setRegisteredUser(user);
      console.log('Usuario registrado:', user);
      this.router.navigate(['/login']);
    } else {
      console.log('El formulario no es válido. Por favor, revisa los campos.');
      this.marcarCamposInvalidos(this.registerForm);
    }
  }

  marcarCamposInvalidos(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control && control.invalid) {
        console.log(`${key} es inválido:`, control.errors);
      }
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
}










