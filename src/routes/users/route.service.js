const fs = require('node:fs/promises');

exports.createUser = async (name, surnames) => {
  try {
    const user = { 
      name, 
      surnames 
    }
    console.log(user)
    const file = await fs.readFile('users.json')
    const users = JSON.parse(file)
    users.push(user)
    await fs.writeFile('users.json', JSON.stringify(users));
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
exports.getUsers = async (filterName, filterSurnames) => {
  try {
    const usersJSON = await fs.readFile('users.json');
    let users = JSON.parse(usersJSON);
    if(filterName) {
      users = users.filter(({name}) => name === filterName);
    }
    if(filterSurnames){
      users = users.filter(({surnames}) => surnames === filterSurnames);
    }
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
