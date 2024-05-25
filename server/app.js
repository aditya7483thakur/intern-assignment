import express from "express";
import { mongoDb } from "./data/connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.js";
import cartProductRouter from "./routes/product.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Intern Backend Swagger",
    version: "1.0.0",
    description: "These Api's are created as an assignment for internship.",
  },
  servers: [
    {
      url: "http://localhost:3000", // Change this to your server URL
      description: "Development server",
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ["./routes/*.js", "./app.js"], // Add paths to your API files here
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Serve swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
  })
);

mongoDb();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", userRouter);
app.use("/api", cartProductRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
