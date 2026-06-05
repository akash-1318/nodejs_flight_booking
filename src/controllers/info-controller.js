const {statusCodes} = require("http-status-code");

const info = (req, res) => {
  return res.status(statusCodes.OK ).json({
    success: true,
    message: "This is a flight booking application",
  });
};

module.exports = {
  info,
};