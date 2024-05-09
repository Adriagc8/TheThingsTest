const { appendUser, findUsers } = require("./users.repository");

exports.createUser = async (name, surnames) => {
  const user = {
    name,
    surnames,
  };
  return await appendUser(user);
};

exports.getUsers = async (name, surnames) => {
  const filter = {};
  if (name) filter.name = name;
  if (surnames) filter.surnames = surnames;
  return await findUsers(filter);
};
