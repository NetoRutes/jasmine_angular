import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListService } from './users-list/service/users-list.service';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [
    UsersListComponent,
    AppComponent,
    OrderByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [UsersListService, OrderByPipe, FilterByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
