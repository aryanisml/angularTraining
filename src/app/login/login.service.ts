import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  public login(form: FormGroup) : Observable<any>{
    //// http://google.com/login

  return  this.httpClient.post('https://fakestoreapi.com/products',{
  //// 
/*
name : form.value.name,
email : form.value.email.
message : form.value.message
*/
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  
  });
    // return of('success');
  }
}
