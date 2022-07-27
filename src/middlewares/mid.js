const requestIp = require("request-ip");
const rateLimit = require("express-rate-limit");

const ipMiddleware = function (req, res, next) {
  try {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let reqTime =`${hour}:${min}`;
    const clientIp = requestIp.getClientIp(req);

    req.userIp = clientIp;
    req.timings=reqTime;
    return next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const limiter = rateLimit({
  max: 1,                //no of req a user can make at given peroid of time
  windowMs: 10000,      //600000  time period
});

module.exports = { ipMiddleware ,limiter};
