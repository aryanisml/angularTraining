import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-app';
  childProp ="Passed parent data to child...";
}




/*
ng new myapp
ng g c hello -> 

ng - angular/cli
g - generate
c - component 
hello - copmponent name 

*/