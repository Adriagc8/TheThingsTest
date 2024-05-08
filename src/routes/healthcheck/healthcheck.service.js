exports.getHealthcheck = () => {
  return {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
    maintenance: 0,
  };
};
