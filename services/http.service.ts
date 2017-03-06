import{Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class HttpService {
  constructor(public _http:Http) {

  }

  getHttp(url, params) {
    return this._http.get(url, {search: params}).map(result=> result.json);
  }

  postHttp(url, params) {
    return this._http.post(url, params).map(result=>result.json);
  }
}
