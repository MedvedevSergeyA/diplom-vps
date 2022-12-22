const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const tokenData = tokenService.validateAccess(token);
    if (!tokenData) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = tokenData;
    next();
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
