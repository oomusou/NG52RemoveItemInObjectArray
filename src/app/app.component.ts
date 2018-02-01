import { Component } from '@angular/core';
import { SubjectSubscriber } from '../model/subject-subscriber.model';
import { SubjectEnum } from '../enum/subject.enum';
import { SubscriberInterface } from '../interface/SubscriberInterface';

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
    const index = this.subscribers.findIndex(
      item => item.subject === SubjectEnum.FrontEnd && item.subscriber === this
    );

    if (index === -1) {
      return;
    }

    this.subscribers.splice(index, 1);

    console.log(this.subscribers.length);
  }
}
