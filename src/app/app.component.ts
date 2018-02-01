import { Component } from '@angular/core';
import { SubjectSubscriber } from '../model/subject-subscriber.model';
import { SubjectEnum } from '../enum/subject.enum';
import { SubscriberInterface } from '../interface/SubscriberInterface';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements SubscriberInterface {
  message: string;
  private subscribers: SubjectSubscriber[] = [];

  update(message: string): void {
    this.message = message;
  }

  onSubscribeClick() {
    const subjectSubscriber: SubjectSubscriber = {
      subject: SubjectEnum.FrontEnd,
      subscriber: this
    };

    this.subscribers.push(subjectSubscriber);

    console.log(this.subscribers.length);
  }

  onUnSubscribeClick() {
    const subjectSubscriber: SubjectSubscriber = {
      subject: SubjectEnum.FrontEnd,
      subscriber: this
    };

    _.remove(this.subscribers, subjectSubscriber);

    console.log(this.subscribers.length);
  }
}
