import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { MaterializeModule } from 'angular2-materialize';

import { of } from 'rxjs';

import { UsersListComponent } from './users-list.component';
import { UsersListService } from './service/users-list.service';
import { FilterByPipe } from './../pipes/filter-by/filter-by.pipe';
import { OrderByPipe } from './../pipes/order-by/order-by.pipe';
import { MockResponseData } from './../mocks/user-list-response-data.mock';
import { HttpClientModule } from '@angular/common/http';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MaterializeModule, HttpClientModule ],
      declarations: [ UsersListComponent ],
      providers: [ UsersListService, OrderByPipe, FilterByPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create users-list component', () => {
    expect(component).toBeTruthy();
  });

  it('should getUsers from service when ngInit is called (component is loaded)', () => {
    spyOn(component.myService,'getUsers').and.callFake(() => {return of(MockResponseData)});
    component.ngOnInit();
    expect(component.myService.getUsers).toHaveBeenCalled();
  });

  it('should order filteredUsers array by columnName when order(\'columName\') function is called', () => {
    spyOn(component.orderBy, 'transform');
    component.order('name');
    expect(component.orderBy.transform).toHaveBeenCalledWith([],'name');
  });

  it('should filter filteredUsers array by value when filter(\'value\') function is called', () => {
    spyOn(component.filterBy, 'transform');
    component.filter('Carol');
    expect(component.filterBy.transform).toHaveBeenCalledWith(component.allUsers,'Carol');
  });

  it('should call modalActions.emit when closeDeleteModal is called', () => {
    spyOn(component.modalActions, 'emit');
    component.closeDeleteModal();
    expect(component.modalActions.emit).toHaveBeenCalledWith({action:"modal",params:['close']});
  });
  
  it('should call modalActions.emit when openDeleteModal is called', () => {
    spyOn(component.modalActions, 'emit');
    component.openDeleteModal('Caroline Westernick');
    expect(component.modalActions.emit).toHaveBeenCalledWith({action:"modal",params:['open']});
  });

});