import { MockUsersListFiltered } from './../../mocks/users-list-filtered.mock.';
import { MockUsersList } from './../../mocks/users-list.service.mock';
import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter userList by characteres \'Carol\'',() => {
    const pipe = new FilterByPipe();
    let resultUserListFiltered = pipe.transform(MockUsersList,'Carol');
    expect(resultUserListFiltered).toEqual(MockUsersListFiltered);
  });

  it('should return all users if value passed is undefined',() => {
    const pipe = new FilterByPipe();
    let resultUserListFiltered = pipe.transform(MockUsersList, undefined);
    expect(resultUserListFiltered).toEqual(MockUsersList);
  });

});