/**
 * Module for managing users in a JSON file.
 * @module users.service
 * @requires ./users.repository
 */
const { appendUser, findUsers } = require("./users.repository");
/**
 * Creates a new user and appends it to the users.json file.
 * @param {string} name - The name of the user.
 * @param {string} surnames - The surnames of the user.
 * @returns {Promise<Object>} The created user.
 */
exports.createUser = async (name, surnames) => {
  const user = {
    name,
    surnames,
  };
  return await appendUser(user);
};
/**
 * Finds users in the users.json file that match the specified name and surnames.
 * @param {string} name - The name of the users to find.
 * @param {string} surnames - The surnames of the users to find.
 * @returns {Promise<Array<Object>>} The found users.
 */
exports.getUsers = async (name, surnames) => {
  const filter = {};
  if (name) filter.name = name;
  if (surnames) filter.surnames = surnames;
  return await findUsers(filter);
};
