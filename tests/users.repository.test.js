const { appendUser, findUsers, clearUsers } = require('../src/routes/users/users.repository');

describe('users.repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should append a user', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await appendUser(user);
    expect(result).toEqual(user);
  });

  it('should find users by name', async () => {
    const user = { name: 'John', surnames: 'Doe' };

    const result = await findUsers({ name: user.name });
    expect(result).toEqual([user]);
  });

  it('should find users by surnames', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await findUsers({surnames: user.surnames});
    expect(result).toEqual([user]);
  });

  it('should find users by name and surnames', async () => {
    const user = { name: 'John', surnames: 'Doe' };
    const result = await findUsers({name: user.name, surnames: user.surnames});
    expect(result).toEqual([user]);
  });

  it('should clear users', async () => {
    const result = await clearUsers();
    expect(result).toEqual([]);
  });
});