import { SubjectEnum } from '../enum/subject.enum';
import { SubscriberInterface } from '../interface/SubscriberInterface';

export interface SubjectSubscriber {
  subject: SubjectEnum;
  subscriber: SubscriberInterface;
}
