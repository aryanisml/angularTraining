import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public mySubject : Subject<any> = new Subject();
  constructor() { }
}
