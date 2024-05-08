const fs = require('node:fs/promises');
const { filterObjects } = require('../../utils/filter');

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

exports.findUsers = async ( name, surnames ) => {
    let users = await readUsers();
    const filter = {};
    if(name) filter.name = name;
    if(surnames) filter.surnames = surnames;
    return filterObjects(users, filter);
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