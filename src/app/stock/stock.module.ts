import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import {MatSliderModule} from '@angular/material/slider';
import {ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    StockSearchComponent,
    StockComponent,
    StocksComponent,
    StockChartComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    StocksComponent
  ]
})
export class StockModule { }
