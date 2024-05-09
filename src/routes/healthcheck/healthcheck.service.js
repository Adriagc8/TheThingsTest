/**
 * Returns a health check object.
 * @returns {Object} The health check object.
 * @returns {Number} uptime The uptime of the process in seconds.
 * @returns {String} message The status message.
 * @returns {Number} timestamp The current timestamp in milliseconds.
 * @returns {Number} maintenance The maintenance mode flag.
 */
exports.getHealthcheck = () => {
  return {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
    maintenance: 0,
  };
};
