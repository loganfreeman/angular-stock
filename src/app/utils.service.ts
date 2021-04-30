import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  queryParams(params: any): string {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }

  query(url: string, params: any): string {
    return `${url}?${this.queryParams(params)}`;
  }
}
