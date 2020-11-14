const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const router = require("express").Router();

const passport = require("passport");

// Load models
const User = mongoose.model("user");

// keys
const keys = require("../keys");

router.get("/test", passport.authenticate("jwt", { session: false }), (req, res) =>
    res.send({ msg: "test done" })
);

router.get("/user/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    }
    res.status(404).send();
});

router.get("/user/logout", (req, res) => {
    req.logOut();
    res.clearCookie("jwt");
    res.status(200).send();
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error("This email is not associated with any account");

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) throw new Error("Wrong password!");

        const token = jwt.sign({ _id: user._id }, keys.SECRET_OR_KEY, { expiresIn: "1h" });

        res.cookie("jwt", token);
        // res.cookie("jwt", `Bearer ${token}`);
        res.status(200).send({ token: token });
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.post("/user", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = await new User({ email: req.body.email, password: hash }).save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error });
    }
});

module.exports = router;
