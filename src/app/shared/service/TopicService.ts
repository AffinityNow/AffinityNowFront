import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Topic} from '../model/topic.model';


@Injectable()
export class TopicService {
  readonly rootUrl = 'http://localhost:8080/topic';

  constructor(private http: HttpClient) {
  }

  getTopics() {
    return this.http.get<any>(this.rootUrl)
      .toPromise()
      .then(res => <Topic[]> res)
      .then(data => {
        return data;
      });
  }
}
