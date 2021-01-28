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
}
