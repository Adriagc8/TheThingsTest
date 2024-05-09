/**
 * Module for managing users in a JSON file.
 * @module users.repository
 * @requires node:fs/promises
 * @requires ../../utils/filter
 * @requires ../../error/app-error
 */
const fs = require("node:fs/promises");
const { filterObjects } = require("../../utils/filter");
const AppError = require("../../error/app-error");
const filePath = "users.json";
/**
 * Appends a user to the users.json file.
 * @param {Object} user - The user to append.
 * @returns {Promise<Object>} The appended user.
 */
exports.appendUser = async (user) => {
  const users = await readUsers();
  try {
    users.push(user);
    await fs.writeFile(filePath, JSON.stringify(users));
    return user;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Append User failed",
    });
  }
};
/**
 * Finds users in the users.json file that match the specified filter.
 * @param {Object} filter - The filter to use for finding users.
 * @returns {Promise<Array<Object>>} The found users.
 */
exports.findUsers = async (filter) => {
  let users = await readUsers();
  try {
    return filterObjects(users, filter);
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Find users failed",
    });
  }
};
/**
 * Clears the users.json file.
 * @returns {Promise<Array<Object>>} The cleared users.
 */
exports.clearUsers = async () => {
  try {
    await fs.writeFile(filePath, "[]");
    const users = await readUsers();
    return users;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Clear users failed",
    });
  }
};
/**
 * Reads the users from the users.json file.
 * @returns {Promise<Array<Object>>} The users.
 */
const readUsers = async () => {
  try {
    const file = await fs.readFile(filePath);
    const users = JSON.parse(file);
    return users;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Read users failed",
    });
  }
};
