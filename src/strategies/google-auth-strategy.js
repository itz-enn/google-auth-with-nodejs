// var GoogleStrategy = require('passport-google-oauth20').Strategy;

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export const passportStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.REDIRECT_URL,
        scope: ["email", "profile"],
      },

      function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        console.log(accessToken, profile)
      }
    )
  );
};
