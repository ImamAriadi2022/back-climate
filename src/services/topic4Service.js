const { env } = require("../config/env");
const { ApiError } = require("../utils/apiError");

const assertSafeIdentifier = (identifier) => {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(identifier)) {
    throw new ApiError(500, "Konfigurasi nama tabel tidak valid.");
  }

  return identifier;
};

const getTopic4 = async (pool, pagination) => {
  if (!pool) {
    throw new ApiError(500, "Database belum dikonfigurasi untuk endpoint ini.");
  }

  const limit = pagination?.limit ?? env.topic4.defaultLimit;
  const offset = pagination?.offset ?? env.topic4.defaultOffset;
  const tableName = assertSafeIdentifier(env.topic4.table);

  const query = `SELECT * FROM ${tableName} ORDER BY timestamp DESC LIMIT $1 OFFSET $2`;
  const { rows } = await pool.query(query, [limit, offset]);

  return Array.isArray(rows) ? rows : [];
};

module.exports = {
  getTopic4,
};
