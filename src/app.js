const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { topic4Router } = require("./routes/topic4Routes");
const { healthRouter } = require("./routes/healthRoutes");
const { publicApiRateLimiter } = require("./middleware/rateLimiter");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");
const { loadOpenApiDocument } = require("./config/openapi");

const app = express();
const openApiDocument = loadOpenApiDocument();
const swaggerUiOptions = {
  customSiteTitle: "Back Climate API Docs",
  explorer: true,
  swaggerOptions: {
    docExpansion: "list",
    defaultModelsExpandDepth: 1,
    displayRequestDuration: true,
    tryItOutEnabled: true,
    filter: true,
  },
};

app.use(cors());
app.use(express.json());
app.use(publicApiRateLimiter);

app.get("/docs.json", (_req, res) => {
  res.status(200).json(openApiDocument);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument, swaggerUiOptions));

app.use(healthRouter);
app.use(topic4Router);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
};
