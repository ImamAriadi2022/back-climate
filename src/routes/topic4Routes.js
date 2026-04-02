const express = require("express");
const { createTopic4Handler } = require("../controllers/topic4Controller");
const { validatePaginationQuery } = require("../validators/queryParams");

const router = express.Router();

router.get("/petengoran/topic4", validatePaginationQuery, createTopic4Handler("petengoran"));
router.get(
  "/kalimantan/topic4",
  validatePaginationQuery,
  createTopic4Handler("kalimantan")
);
router.get("/dashboard/topic4", validatePaginationQuery, createTopic4Handler("dashboard"));

module.exports = {
  topic4Router: router,
};
