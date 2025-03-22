import express from "express";
import cors from "cors";
import commitRoutes from "./api/v1/routes/commit.routes";
import errorMiddleware from "./middleware/error.middleware";


const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(errorMiddleware)

app.use("/api/repositories", commitRoutes);

export default app;