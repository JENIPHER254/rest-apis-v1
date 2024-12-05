const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0",
    },
  },
  apis: ["app.js", "./routes/*.js"], // Include all route files for Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Import routes
const booksRoutes = require("./routes/books");

// Use routes
app.use("/books", booksRoutes);

// Listen on localhost 5000 server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
