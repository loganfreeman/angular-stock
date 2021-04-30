import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_KEY = 'ZGN5MW8SCFQZBPBN';
const STOCK_QUERY_URL = 'https://www.alphavantage.co/query';
@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor(private http: HttpClient) { }

  searchSymbol(symbol: string): Observable<any> {
    return this.http.get(STOCK_QUERY_URL, {
      params: new HttpParams({
        fromObject: {
          function: 'SYMBOL_SEARCH',
          keywords: symbol,
          apikey: API_KEY
        }
      })
    });
  }

  overview(symbol: string): Observable<any> {
    return this.http.get(STOCK_QUERY_URL,
      {
        params: new HttpParams({
          fromObject: {
            function: 'OVERVIEW',
            symbol,
            apikey: API_KEY
          }
        })
      }
    );
  }

  globalQuote(symbol: string): Observable<any> {
    return this.http.get(STOCK_QUERY_URL, {
      params: new HttpParams({
        fromObject: {
          function: 'GLOBAL_QUOTE',
          symbol,
          apikey: API_KEY
        }
      })
    });
  }

  earnings(symbol: string): Observable<any> {
    return this.http.get(STOCK_QUERY_URL, {
      params: new HttpParams({
        fromObject: {
          function: 'EARNINGS',
          symbol,
          apikey: API_KEY
        }
      })
    });
  }

  daily(symbol: string): Observable<any> {
    return this.http.get(STOCK_QUERY_URL, {
      params: new HttpParams({
        fromObject: {
          function: 'TIME_SERIES_DAILY',
          symbol,
          apikey: API_KEY
        }
      })
    });
  }
}
