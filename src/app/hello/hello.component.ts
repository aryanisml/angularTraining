import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{

@Input() newChildProp: any;

  constructor() { 
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes...');
  }
  ngOnInit(): void {
     console.log('ng on init');
  }

   ngDoCheck(){
     console.log('do check....');
   }

  ngAfterContentInit(): void {
    console.log('content init....')
  }


  ngAfterContentChecked(): void {
     console.log('After content checked ....');
  }

  /*

  changes -> ngOnChanges 
  Init -> ngOnInit
  ngDoCheck
  ngAfterContentInit   when first ngDoCheck 
  ngAfterContentChecked  everyDoCheck 
  ngAfterViewInit  ---
  ngAfterViewChecked  --- ngAfterContentChecked
  ngOnDetroy ------


  ngAfterViewinit
  ngAfterContnetInit
  NgAfterContentChekced
  ngDestory
  */




}
