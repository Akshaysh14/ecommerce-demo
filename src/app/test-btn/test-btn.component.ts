import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss']
})
export class TestBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public childEvent = new EventEmitter();
  fireEvent(){
   let a = 'hbbhb';

    this.childEvent.emit('Hey Codevolution');
  }

}
