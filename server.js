const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// register database models
require("./models/Menu");
require("./models/Project");
require("./models/User");

// routes
const { projectRoutes, menuRoutes, authRoutes } = require("./routes");

// secret keys
const keys = require("./keys");

// mongo db configs
const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

const app = express();
// cross origin resource sharing support
app.use(cors());

app.use(cookieParser());

// use bodyparser to parse information to request.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize passport
app.use(passport.initialize());
// configure passport for jwt strategy
require("./passport");

app.use("/api", menuRoutes, projectRoutes);
app.use("/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
    // make file in public directory available in the root directory
    app.use(express.static(path.resolve(__dirname, "public")));
    // server index.html file for every doesn't match the previously declaired routes
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "public/index.html")));
}

app.listen(keys.PORT, () => {
    mongoose.connect(keys.MONGO_URI, mongoConfig).catch((dbError) => console.log({ dbError }));
});
