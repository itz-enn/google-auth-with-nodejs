import { config } from "dotenv";
config();
import express from "express";
import passport from "passport";
import authRoute from "./src/routes/auth.route.js";
import { passportStrategy } from "./src/strategies/google-auth-strategy.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Loading...");
});

app.use(passport.initialize());
passportStrategy();
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
