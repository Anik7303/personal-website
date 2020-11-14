const passport = require("passport");
const mongoose = require("mongoose");
const router = require("express").Router();

// Load models
const Menu = mongoose.model("menu");

// helper functions
const { isEmpty } = require("../utils");

router.get("/menu", async (req, res) => {
    try {
        const menuList = await Menu.find({}, "name link");
        res.status(200).send(menuList);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.get("/menu/:id", async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.post("/menu", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { name, link } = req.body;
        const result = await new Menu({ name, link }).save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.patch("/menu/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { name, link } = req.body;
        const menu = await Menu.findById(req.params.id);
        if (!isEmpty(name)) {
            menu.name = name;
        }
        if (!isEmpty(link)) {
            menu.link = link;
        }
        const result = await menu.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete("/menu/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await Menu.findByIdAndRemove(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error });
    }
});

module.exports = router;
