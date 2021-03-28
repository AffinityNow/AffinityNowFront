import {RatedTopic} from './ratedtopic.model';
import {Topic} from './topic.model';

export class User {
  pseudo?: string;
  topics: RatedTopic[];
  likedKnowledges: string;
  seekedKnowledges: string;
}

export interface UserProfil {
  pseudo?: string;
  likedKnowledges: any[];
  seekedKnowledges: any[];
}

export interface Knowledge {
  topic: Topic;
  level: string;
}

