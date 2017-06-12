import { Component } from '@angular/core';
var json = require('./emails.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = json;
  message = this.data;
  tags = ['All','Travel','Work'];
  terms;
  messageId = [];
  showPost = false;
  subject;
  sender;
  body;

  handleTermsChanges(e){
    this.terms = e;
  }

  tagsChange(value) {
    var tags = {messages:[]};
    Object.keys(json).forEach(function(key) {
      for(var i = 0; i < json[key].length; i++) {
        if(json[key][i]['tags'].includes(value.toLowerCase())) {
          tags.messages.push(json[key][i]);
        }
      }

    });
    if(value == 'All') {
      this.data = this.message;
    } else {
      this.data = tags;
    }
  }

  handlePostChecked(id) {
    if(this.messageId.indexOf(id) > -1) {
      var i = this.messageId.indexOf(id);
      if(i != -1) {
        this.messageId.splice(i,1);
      }
    } else {
      this.messageId.push(id);
    }
  }

  handleShowPost(e) {
    var i = e.i;
    this.showPost = true;
    this.subject = this.data['messages'][i]['subject'];
    this.sender = this.data['messages'][i]['sender'];
    this.body = this.data['messages'][i]['body'];
  }

  removeChecked() {
    if(this.messageId.length != 0) {
      for(var i = 0; i < this.data['messages'].length; i++) {
        for(var j = 0; j < this.messageId.length; j++) {
          if(this.data['messages'][i]['id'] == this.messageId[j]) {
            var num = parseInt(this.data['messages'][i]['id']);
            var index = this.data['messages'].findIndex(nums => nums.id == num);
            if (index > -1) {
              this.data['messages'].splice(index, 1);
            }
          }
        }
      }
    }
  }

  handleBackInbox() {
    this.showPost = false;
  }

}
