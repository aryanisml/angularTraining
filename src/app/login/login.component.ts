import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   myForm: FormGroup;

  constructor( private formBuilder: FormBuilder, 
    private loginService : LoginService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      // name: new FormControl('Swapnil'),
      // email: new FormControl(''),
      // message: new FormControl('')

      // name: 'Swapnil',
      // email: '',
      // message: ''
      name: ['Swapnil', Validators.required],
      email: ['swapnil.kamble02@gmail.com', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  onSubmit(form: FormGroup): void {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

    this.loginService.login(form).subscribe(d=>{
      alert(d);
    })
  }

}


//// http://google.com/login


///// service -> LoginService
/*



*/