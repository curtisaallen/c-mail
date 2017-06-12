import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  outputs: ['terms']
})
export class HeaderComponent implements OnInit {
  title = 'C-Mail';
  term;
  isClassVisible: false;
  @Output() terms = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  handleTermChange(terms) {
    console.log(this.term);
    this.terms.emit(terms);
  }



}
