import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Topic} from '../model/topic.model';



@Injectable()
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics() {
    return this.http.get<any>('assets/topics.json')
      .toPromise()
      .then(res => <Topic[]>res.data)
      .then(data => { return data; });
  }


  generateTopic(): Topic {
    const topic: Topic =  {
      id: this.generateId(),
      rating: this.generateRating()
    };

    topic.image = topic.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
    return topic;
  }

  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
  }
}
