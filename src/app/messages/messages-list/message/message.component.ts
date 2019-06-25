import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {AppConstants} from '../../../app.constants';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message ;


  constructor() { }

  ngOnInit() {
  }

  getImage(owner: String) {
  if (owner === AppConstants.USER) {
    return AppConstants.USER_IMAGE;
  } else {
    return AppConstants.BOT_IMAGE;
  }
  }

  getMessagePosition(owner: String) {
    if (owner === AppConstants.USER) {
      return AppConstants.USER_POSITION;
    } else {
      return AppConstants.BOT_POSITION;
    }
  }


}
