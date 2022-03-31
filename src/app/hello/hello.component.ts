import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnChanges{


@Input() childProp: any;

  constructor() { 
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes...');
  }
  ngOnInit(): void {
     console.log('ng on init');
  }


  /* 
  Init -> ngOnInit
  changes -> ngOnChanges
  ngDoCheck
  ngAfterViewinit
  ngAfterContnetInit
  NgAfterContentChekced
  ngDestory
  
  */




}
