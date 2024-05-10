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
  try {
    const partitionId = await lastPartitionId();
    if(await partitionSize(partitionId) > 536870912){
      const id = partitionId + 1;
      const file = {
        id,
        users: [user],
      }
      await fs.writeFile(`users${id}.json`, JSON.stringify(file));
      const partitions = await getPartitions();
      partitions.ids.push(id)
      await fs.writeFile(`partitions.json`, JSON.stringify(partitions));
    } else {
      const data = await readPartition(partitionId);
      data.users.push(user);
      await fs.writeFile(`users${partitionId}.json`, JSON.stringify(data));
    }
    return user;
  }catch (error) {
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
  const partitionId = await lastPartitionId();
  const usersFiltered =[]
  for(i=0; i<=partitionId; i++){
    let data = await readPartition(i);
    try {
      usersFiltered.push(...filterObjects(data.users, filter));
    } catch (error) {
      throw new AppError({
        type: AppError.type.internalServerError,
        message: "Find users failed",
      });
    }
  }
  return usersFiltered;
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
/**
 * Get the size of a partition file.
 * @param {number} partitionId - The ID of the partition.
 * @returns {Promise<number>} - The size of the partition file in bytes.
 */
const partitionSize = async (partitionId) => {
  const stats = await fs.stat(`users${partitionId}.json`);
  return stats.size;
}
/**
 * Get the list of partitions.
 * @returns {Promise<Object[]>} - The list of partitions.
 */
const getPartitions = async () => {
  const partitionsFile = await fs.readFile("partitions.json");
  return JSON.parse(partitionsFile);
}
/**
 * Get the ID of the last partition.
 * @returns {Promise<number>} - The ID of the last partition.
 */
const lastPartitionId = async () => {
  const partitions = await getPartitions();
  return partitions.ids[ partitions.ids.length - 1];
}
/**
 * Read the data from a partition.
 * @param {number} partitionId - The ID of the partition.
 * @returns {Promise<Object[]>} - The data from the partition.
 * @throws {AppError} - If there is an error reading the partition.
 */
const readPartition = async (partitionId) => {
  try {
    const file = await fs.readFile(`users${partitionId}.json`);
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    throw new AppError({
      type: AppError.type.internalServerError,
      message: "Read users failed",
    });
  }
};