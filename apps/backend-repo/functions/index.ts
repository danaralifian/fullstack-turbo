/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import functions from "firebase-functions";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "../routes/userRoutes";

dotenv.config();

const app: Express = express();

app.use(cors());

app.use(express.json());

app.use("/api", userRoutes);

// Define a simple API endpoint
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from Firebase Functions!" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   app(request, response);
// });

// Export the API as a Cloud Function
exports.api = onRequest(app);
