import { Component, OnInit, EventEmitter } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';

import { OrderByPipe } from './../pipes/order-by/order-by.pipe';
import { FilterByPipe } from './../pipes/filter-by/filter-by.pipe';
import { UsersListService } from './service/users-list.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  filteredUsers: any[] = [];
  allUsers: any[] = [];
  myService: UsersListService;
  orderBy: OrderByPipe;
  filterBy: FilterByPipe;
  modalActions: EventEmitter<string|MaterializeAction>;
  currentUserName: string = '';
  valueToFilter: string = '';

  constructor(_myService: UsersListService, _orderBy: OrderByPipe, _filterBy: FilterByPipe) {
    this.myService = _myService;
    this.orderBy = _orderBy;
    this.filterBy = _filterBy;
    this.modalActions = new EventEmitter<string|MaterializeAction>();
  }

  ngOnInit(){
    this.myService.getUsers()
    .subscribe({
        next: users => this.allUsers = this.filteredUsers = JSON.parse(JSON.stringify(users)),
        error: error => console.error("=> Erro = "+error),
    });
  }

  order(fieldToOrder: any){
    this.filteredUsers = this.orderBy.transform(this.filteredUsers, fieldToOrder);
  }

  filter(valueToFilter: any){
    this.filteredUsers = this.filterBy.transform(this.allUsers, valueToFilter);
  }

  openDeleteModal(currentUserNameToDelete: any) {
    this.currentUserName = currentUserNameToDelete;
    this.modalActions.emit({action:"modal",params:['open']});
  }
  
  closeDeleteModal() {
    this.currentUserName = '';
    this.modalActions.emit({action:"modal",params:['close']});
  }

}