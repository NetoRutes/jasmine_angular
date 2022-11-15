import { MockUsersListOrdered } from '../../mocks/users-list-ordered.mock';
import { MockUsersList } from '../../mocks/users-list.service.mock';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order userList by column name',() => {
    const pipe = new OrderByPipe();
    let resultUserListOrdered = pipe.transform(MockUsersList,'name');
    expect(JSON.stringify(resultUserListOrdered)).toEqual(JSON.stringify(MockUsersListOrdered));
  });
  
});