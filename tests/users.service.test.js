const { createUser, getUsers } = require('../src/routes/users/users.service');
const { clearUsers } = require('../src/routes/users/users.repository');

describe('users.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await createUser(user.name, user.surnames);
    expect(result).toEqual(user);
  });

  it('should get users by name', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await getUsers(user.name);
    expect(result).toEqual([user]);
  });

  it('should get users by surnames', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await getUsers(null, user.surnames);
    expect(result).toEqual([user]);
  });

  it('should get users by name and surnames', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await getUsers(user.name, user.surnames);
    expect(result).toEqual([user]);
  });
  it('should clear users', async () => {
    const result = await clearUsers();
    expect(result).toEqual([]);
  });
});