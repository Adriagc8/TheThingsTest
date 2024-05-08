const { appendUser, findUsers } = require('./route.repository');

exports.createUser = async (name, surnames) => {
  try {
    const user = { 
      name, 
      surnames 
    }
    return await appendUser(user);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.getUsers = async (filterName, filterSurnames) => {
  try {
    return await findUsers(filterName, filterSurnames);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
