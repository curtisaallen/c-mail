import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  inputs: ['postData', 'termVal'],
  outputs: ['idEvent', 'showEventPost']
})
export class ListComponent implements OnInit {
  @Input() postData: any;
  @Input() termVal: string;
  @Output() idEvent = new EventEmitter<number>();
  @Output() showEventPost = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  showEmail(i, id) {
    this.showEventPost.emit({i:i,id:id});
  }

  removeMessage(id) {
    console.log(id);
    this.idEvent.emit(parseInt(id));
  }

}
