import { config } from "dotenv";
config();
import express from "express";
import passport from "passport";
import authRoute from "./src/routes/auth.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Loading...");
});

app.use(passport.initialize());
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
