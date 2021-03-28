import {RatedTopic} from './ratedtopic.model';

export class User {
  pseudo?: string;
  topics: RatedTopic[];
  likedKnowledges: string;
  seekedKnowledges: string;

}
