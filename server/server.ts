import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.TRUSTED_ORIGINS
    ? process.env.TRUSTED_ORIGINS.split(",")
    : true,
  credentials: true,
};

app.use(cors(corsOptions));

app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

app.use(express.json({ limit: "50mb" }));

app.use("/api/auth", toNodeHandler(auth));

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});