import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { UsersListService } from './users-list/service/users-list.service';
import { UsersListComponent } from './users-list/users-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersListComponent,
        AppComponent,
        OrderByPipe,
        FilterByPipe
      ],
      imports: [HttpClientModule, MaterializeModule],
      providers: [UsersListService, OrderByPipe, FilterByPipe]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as titleTopBar 'users-list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.titleTopBar).toEqual('Users List');
  });

  it('should render titleTopBar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Users List');
  });
});
