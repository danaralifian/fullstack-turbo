import express, { Express, Request, Response } from "express";
import cors from "cors";
import userRoutes from "../routes/userRoutes";

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
