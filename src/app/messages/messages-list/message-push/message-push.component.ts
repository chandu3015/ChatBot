import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from '../../models/message.model';
import {AppConstants} from '../../../app.constants';

import {LexRuntime} from 'aws-sdk';
import {LexConstants} from '../../../lex/lex.constants';


@Component({
  selector: 'app-message-push',
  templateUrl: './message-push.component.html',
  styleUrls: ['./message-push.component.css']
})
export class MessagePushComponent implements OnInit {
  lexConsts: LexConstants = new LexConstants();

  @ViewChild('userMessage') userMessage: ElementRef ;
  @Output() messageAdded = new EventEmitter<Message>();
    appConsts: AppConstants = new AppConstants();

  constructor() { }

  ngOnInit() {

  }

  onPushSend() {
    const messageCOntent = this.userMessage.nativeElement.value;
    const author = AppConstants.USER;
    const message = new Message(author, messageCOntent);
    this.messageAdded.emit(message);
  }
}
