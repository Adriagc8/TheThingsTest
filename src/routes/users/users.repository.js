const fs = require('node:fs/promises');

exports.appendUser = async (user) => {
    try {
        const users = await readUsers();
        users.push(user);
        await fs.writeFile('users.json', JSON.stringify(users));
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
  };

exports.findUsers = async (filterName, filterSurnames) => {
    let users = await readUsers();
    if(filterName || filterSurnames) {
        users = users.filter((user) => {
        if(filterName && filterSurnames) {
            return (user.name === filterName && user.surnames === filterSurnames);
        }
        if(filterName) {
            return user.name === filterName;
        }
        if(filterSurnames) {
            return user.surnames === filterSurnames;
        }
        return false;
        });
    }
    return users;
}
const readUsers = async () => {
    try {
      const file = await fs.readFile('users.json');
      const users = JSON.parse(file);
      return users;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
};