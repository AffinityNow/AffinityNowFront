import {Topic} from './topic.model';
import {RateItem} from './rateitem.model';

export class RatedTopic {
  constructor(public topic: Topic, public liked: RateItem, public seeked: RateItem) {
  }

}
