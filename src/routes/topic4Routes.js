const express = require("express");
const { createTopic4Handler } = require("../controllers/topic4Controller");

const router = express.Router();

// Legacy route, kept for backward compatibility, behaves as history.
router.get("/petengoran/topic4", createTopic4Handler("petengoran", "history"));
router.get("/kalimantan/topic4", createTopic4Handler("kalimantan", "history"));
router.get("/dashboard/topic4", createTopic4Handler("dashboard", "history"));

router.get("/petengoran/topic4/history", createTopic4Handler("petengoran", "history"));
router.get("/petengoran/topic4/latest", createTopic4Handler("petengoran", "latest"));

router.get("/kalimantan/topic4/history", createTopic4Handler("kalimantan", "history"));
router.get("/kalimantan/topic4/latest", createTopic4Handler("kalimantan", "latest"));

router.get("/dashboard/topic4/history", createTopic4Handler("dashboard", "history"));
router.get("/dashboard/topic4/latest", createTopic4Handler("dashboard", "latest"));

module.exports = {
  topic4Router: router,
};
