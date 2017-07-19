import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientService } from '../http-client/http-client.service';

@Injectable()
export class APIService {
  constructor(private httpClientService: HttpClientService) {
  }

  getUsers(): Observable<any[]> {
    return this.httpClientService.get('getUsers')
      .map(res => res);
  }
}
