import {Injectable} from '@angular/core';
import {Http, Headers, Response, URLSearchParams, RequestOptions, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { EventsService } from '../broadcast-event/broadcaster';

@Injectable()
export class HttpClientService {
  private globalHeaders: Headers = new Headers();
  private apiConfig;
  private initialized = false;
  public globalErrorhandler;

  constructor(private http: Http,
              private eventsService: EventsService) {
  }

  init(baseUrl: string, apiConfig: Object) {
    this.apiConfig = apiConfig;
    this.apiConfig.baseConfig.basePath = baseUrl;
    this.initialized = true;
  }

  registerGlobalHeader(key, value): void {
    this.globalHeaders.append(key, value);
  }

  get(url, options?) {
    return this.http.get(this.getFullUrl(url, options))
      .map((res: Response) => res.json())
      .catch(err => {
        this.handleError(err);
        return Observable.throw(err);
      }).finally(() => {
        this.eventsService.broadcast('loaderOn', false);
      });
  }

  post(url, data, options?) {
    return this.http.post(this.getFullUrl(url, options), JSON.stringify(data), {headers: this.globalHeaders})
      .catch(err => {
        this.handleError(err);
        return Observable.throw(err);
      }).finally(() => {
        this.eventsService.broadcast('loaderOn', false);
      });
  }

  put(url, data, options?) {
    this.eventsService.broadcast('loaderOn', true);
    return this.http.put(this.getFullUrl(url, options), JSON.stringify(data), {headers: this.globalHeaders})
      .catch(err => {
        this.handleError(err);
        return Observable.throw(err);
      }).finally(() => {
        this.eventsService.broadcast('loaderOn', false);
      });
  }

  delete(url, options?) {
    return this.http.delete(this.getFullUrl(url, options), {headers: this.globalHeaders})
      .catch(err => {
        this.handleError(err);
        return Observable.throw(err);
      });
  }

  postWallet(url, event, options?) {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const _this = this;

    // This is temporary till we figure out to send zip via HTTP.Post
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const toasterData = ['success', 'Wallets imported successfully'];
        _this.eventsService.broadcast('toasterNotification', toasterData);
        _this.eventsService.broadcast('getWallets', '');
      } else if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 500) {
          console.log('Internal Server Error');
        } else if (xhr.status === 404) {
          console.log('Page Not Found');
        } else if (xhr.status === 400) {
          console.log('Invalid Input');
        } else if (xhr.status === 413) {
          console.log('Unauthorized Access');
        } else if (xhr.status === 415) {
          console.log('Unsupported Media Type');
        }
      }
    };

    xhr.open('POST', this.getFullUrl(url, options), true);
    xhr.setRequestHeader('X-Requested-By', '1');
    const formData = new FormData();
    formData.append('file', event.target.files[0], event.target.files[0].name);
    xhr.send(formData);
    return Observable.of(xhr);
  }

  getWallet(url, options?) {
    const headers = new Headers({'Accept': 'application/zip'});
    const headerOptions = new RequestOptions({headers: headers, responseType: ResponseContentType.ArrayBuffer});
    url = this.getFullUrl(url, options);
    if (options !== null && options !== undefined) {
      url = url.replace(':id', options.pathParameters.id);
    }

    return this.http.get(url, headerOptions)
      .map((res: Response) => res)
      .catch(err => {
        err._body = '';
        this.handleError(err);
        return Observable.throw(err);
      }).finally(() => {
        this.eventsService.broadcast('loaderOn', false);
      });
  }

  private handleError(response: any) {
    if (typeof this.globalErrorhandler === 'function') {
      this.globalErrorhandler(response);
    }
    return Observable.throw(response);
  }

  private getFullUrl(urlName, options) {
    const requestObject = this.apiConfig.requestNames[urlName];
    const baseUrl = (requestObject.basePath) || this.apiConfig.baseConfig.basePath;

    return baseUrl + this.buildPathWithParams(requestObject.endpoint, options);
  }

  private buildPathWithParams(endpoint, options) {
    const paths = endpoint.split('/'),
      eachPath = [],
      pathParameters = (options && options.pathParameters) || [];
    paths.forEach(function (path) {
      // path parameter is indicated by :param
      eachPath.push(path[0] === ':' ? pathParameters[path.substring(1)] : path);
    });
    return eachPath.join('/');
  }
}
