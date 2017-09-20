import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './core/http-client/http-client.service';
import { APIService } from './core/app-config/app-config.service';
import { ApiConfig } from './core/core.constant';
import { environment } from '../environments/environment';
import { Field } from './reportModule/classes/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users = [];

  constructor(private apiService: APIService,
              private httpService: HttpClientService) {

  }

  ngOnInit(){
    this.httpService.init(environment.serviceURL, ApiConfig);
    this.httpService.registerGlobalHeader('X-Requested-By', '1');
    this.httpService.registerGlobalHeader('Content-Type', 'application/json');

    this.httpService.globalErrorhandler = (response) => {
      console.log("error");
    };
    this.apiService.getUsers().subscribe(userCol => {
        this.users = userCol;
    });
  }
}
