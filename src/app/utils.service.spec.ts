import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
const STOCK_QUERY_URL = 'https://www.alphavantage.co/query';

const API_KEY = 'ZGN5MW8SCFQZBPBN';
describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create query with url and params', () => {
    expect(service.query(STOCK_QUERY_URL, {
      function: 'SYMBOL_SEARCH',
      keywords: 'IBM',
      apikey: API_KEY
    })).toEqual('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=IBM&apikey=ZGN5MW8SCFQZBPBN');
  });
});
