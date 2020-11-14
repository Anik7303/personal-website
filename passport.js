const passport = require("passport");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

// Load models
const User = require("mongoose").model("user");

// keys
const keys = require("./keys");

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }
    return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = keys.SECRET_OR_KEY;

passport.use(
    new JWTStrategy(opts, async (payload, done) => {
        try {
            const user = await User.findOne({ _id: payload._id }).select("email");
            if (!user) throw new Error("user not found");
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    })
);
