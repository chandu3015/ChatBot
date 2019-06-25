import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message.model';
import {AppConstants} from '../../app.constants';
import {LexConstants} from '../../lex/lex.constants';
import * as LexRuntime from 'aws-sdk/clients/lexruntime';



@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  lex: LexRuntime ;

  messages: Message[] = [
    new Message(AppConstants.USER, 'Hi I am user'),
    new Message(AppConstants.BOT, 'Hi I am Bot'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onMessageAdded(message: Message) {
    this.messages.push(message);
    this.getLexResponse(message.message);
  }

  getLexResponse(message: String) {
    let messa: string;
   const params = {
      botAlias: LexConstants.Bot_Alias,
      botName: LexConstants.BOT_NAME,
      inputText: message,
      userId: LexConstants.USER_ID
    };
    this.lex = new LexRuntime({
      accessKeyId: LexConstants.AccessKey_Id,
    secretAccessKey: LexConstants.SecretAccess_Key,
    region: LexConstants.Region
  });

   // @ts-ignore
    this.lex.postText( params ,
     (err, data) => {
       if (err) {
         console.log(err, err.stack); // an error occurred
       } else {
         console.log(data); // successful response
         messa = data.message;
       }
       this.messages.push(new Message(AppConstants.BOT, messa));
     }
     );

  }
}
