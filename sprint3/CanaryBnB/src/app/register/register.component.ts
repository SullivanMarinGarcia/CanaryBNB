import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder, private auth: AuthService){ }

  ngOnInit() {
  }

  formRegister = this.fb.group({
    'fullname': ['', [Validators.required, Validators.minLength(6)]],
    'birthdate': ['', [Validators.required, Validators.minLength(6)]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]]
  });

  get fullname(){
    return this.formRegister.get('fullname') as FormControl;
  }

  get birthdate(){
    return this.formRegister.get('birthdate') as FormControl;
  }

  get email(){
    return this.formRegister.get('email') as FormControl;
  }

  get password(){
    return this.formRegister.get('password') as FormControl;
  }

  get password2(){
    return this.formRegister.get('password2') as FormControl;
  }

  registerAction(): void{
    if (this.formRegister.valid) {
      const email: string = this.formRegister.get('email')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      const password: string = this.formRegister.get('password')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      const fullname: string = this.formRegister.get('fullname')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      const birthdate: string = this.formRegister.get('birthdate')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      console.log(this.formRegister.value);
      this.auth.register(email, password);
      this.formRegister.reset();
    }
  }
}