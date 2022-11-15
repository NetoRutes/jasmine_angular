import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
        providers: [
            UsersListService, 
        ]
        });
    });

    it('should provide the userService', 
        inject([UsersListService], (service: UsersListService) => {
        expect(service).toBeTruthy();
        })
    );

    it('should return usersList',
        inject([UsersListService, HttpTestingController], (service: UsersListService, httpMock: HttpTestingController) => {
            service.getUsers().subscribe();
            httpMock.expectOne('http://demo8362249.mockable.io/users');
        })
    );
});