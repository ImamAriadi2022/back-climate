const { getPoolBySource } = require("../config/database");
const { getTopic4 } = require("../services/topic4Service");

const createTopic4Handler = (source) => {
  return async (req, res, next) => {
    try {
      const pool = getPoolBySource(source);
      const rows = await getTopic4(pool, req.pagination);

      res.status(200).json({ result: rows });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  createTopic4Handler,
};
