const fs = require("node:fs/promises");
const { filterObjects } = require("../../utils/filter");
const AppError = require("../../error/app-error");

exports.appendUser = async (user) => {
  const users = await readUsers();
  try {
    users.push(user);
    await fs.writeFile("users.json", JSON.stringify(users));
    return user;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Append User failed",
    });
  }
};

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
const readUsers = async () => {
  try {
    const file = await fs.readFile("users.json");
    const users = JSON.parse(file);
    return users;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Read users failed",
    });
  }
};
exports.clearUsers = async () => {
  try {
    await fs.writeFile("users.json","[]");
    const users = await readUsers();
    return users;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Clear users failed",
    });
  }
};
