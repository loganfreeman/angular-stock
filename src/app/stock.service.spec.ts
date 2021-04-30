import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], });
    service = TestBed.inject(StockService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search symbol', (done) => {
    const searchResult = {
    bestMatches: [
        {
            '1. symbol': 'IBM',
            '2. name': 'International Business Machines Corp',
            '3. type': 'Equity',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '1.0000'
        },
        {
            '1. symbol': 'IBMJ',
            '2. name': 'iShares iBonds Dec 2021 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBMK',
            '2. name': 'iShares iBonds Dec 2022 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBML',
            '2. name': 'iShares iBonds Dec 2023 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBMM',
            '2. name': 'iShares iBonds Dec 2024 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBMN',
            '2. name': 'iShares iBonds Dec 2025 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBMO',
            '2. name': 'iShares iBonds Dec 2026 Term Muni Bond ETF',
            '3. type': 'ETF',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-04',
            '8. currency': 'USD',
            '9. matchScore': '0.8571'
        },
        {
            '1. symbol': 'IBM.FRK',
            '2. name': 'International Business Machines Corporation',
            '3. type': 'Equity',
            '4. region': 'Frankfurt',
            '5. marketOpen': '08:00',
            '6. marketClose': '20:00',
            '7. timezone': 'UTC+02',
            '8. currency': 'EUR',
            '9. matchScore': '0.7500'
        },
        {
            '1. symbol': 'IBM.LON',
            '2. name': 'International Business Machines Corporation',
            '3. type': 'Equity',
            '4. region': 'United Kingdom',
            '5. marketOpen': '08:00',
            '6. marketClose': '16:30',
            '7. timezone': 'UTC+01',
            '8. currency': 'USD',
            '9. matchScore': '0.7500'
        },
        {
            '1. symbol': 'IBM.DEX',
            '2. name': 'International Business Machines Corporation',
            '3. type': 'Equity',
            '4. region': 'XETRA',
            '5. marketOpen': '08:00',
            '6. marketClose': '20:00',
            '7. timezone': 'UTC+02',
            '8. currency': 'EUR',
            '9. matchScore': '0.6667'
        }
    ]
};

    service.searchSymbol('IBM').subscribe(res => {
      expect(res.bestMatches.length).toBe(10);
    });

    const req = httpMock.expectOne('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=IBM&apikey=ZGN5MW8SCFQZBPBN');
    expect(req.request.method).toBe('GET');
    req.flush(searchResult);
  });

  afterEach(() => {
  httpMock.verify();
});
});
