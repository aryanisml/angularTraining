import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnDestroy{
 
  public tempProp = true;
  public tempProp2 = false;
  public tempPerform = 'Hide';

/* 

   if(tempProp) {
       show Content
   }else {
     hide content 
   }

*/


   private _child:any;
  @ViewChild('newChildtemp') 
  set sampleHelloChild (value : ElementRef<any>){
    this._child = value;
  }

  @ViewChild('child1')
  child1!: ElementRef;

  constructor(private element: ElementRef){

  }
  /*
  cfcacpg
  1qaz2wsx
*/

  title = 'api-app';
  childProp ="Passed parent data to child...";

   ngAfterViewInit(): void {
     //console.log(this.child1.nativeElement);
      console.log('View Child init...');
   }

   ngAfterViewChecked(): void {
    console.log('View checked....');
  }
   

  ngOnDestroy(): void {
  console.log('clean up destroy');
  }
  

  onShow(){
    this.tempProp= true;
  }

  onHide(){
     this.tempProp = false;
  }

  perform(){
    if(this.tempProp2 === false) {
      this.tempPerform = 'Show';
      this.tempProp2 = true;
    }else {
      this.tempPerform = 'Hide';
      this.tempProp2 = false;
    }
  }

}




/*
ng new myapp
ng g c hello -> 

ng - angular/cli
g - generate
c - component 
hello - copmponent name 

*/