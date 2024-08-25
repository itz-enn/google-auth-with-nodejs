import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import passport from "passport";

const authRoute = Router();

authRoute.get('/google', passport.authenticate('google'), authController)
authRoute.get('/google/redirect', passport.authenticate('google'), authController)

export default authRoute