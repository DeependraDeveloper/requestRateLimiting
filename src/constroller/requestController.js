let userProfiles = [
  {
    _id: 1,
    name: "ramesh",
    desgination: "student",
  },
  {
    _id: 2,
    name: "abhishek",
    desgination: "ca",
  },
];

const incomingRequest = (req, res) => {
  try {
    let val1 = req.userIp;
    let val2 = req.timings;

    let msg = `Note now you can only request after 10 mins with ip address ${val1} at ${val2}`;

    return res.status(200).json({ msg: msg, data: userProfiles });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { incomingRequest };
