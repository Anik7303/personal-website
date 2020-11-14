const passport = require("passport");
const mongoose = require("mongoose");
const router = require("express").Router();

// Load models
const Project = mongoose.model("project");

// helper functions
const { isEmpty } = require("../utils");

router.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.get("/projects/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).send(project);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.post("/projects", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { name, description, keywords, link, repoHttps, repoSsl, author } = req.body;
        const config = {
            name,
            description,
            keywords: keywords.split(",").map((keyword) => keyword.trim()),
            link,
            githubRepo: {
                https: repoHttps,
                ssl: repoSsl,
            },
        };
        if (author) {
            config.author = author;
        }
        const result = await new Project(config).save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.patch(
    "/projects/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { name, description, keywords, link, repoHttps, repoSsl, author } = req.body;

            const project = await Project.findById(req.params.id);

            if (!isEmpty(name)) {
                project.name = name;
            }
            if (!isEmpty(description)) {
                project.description = description;
            }
            if (!isEmpty(keywords)) {
                project.keywords = keywords.split(",").map((keyword) => keyword.trim());
            }
            if (!isEmpty(link)) {
                project.link = link;
            }
            if (!isEmpty(repoHttps)) {
                project.githubRepo = { ...project.githubRepo, https: repoHttps };
            }
            if (!isEmpty(repoSsl)) {
                project.githubRepo = { ...project.githubRepo, ssl: repoSsl };
            }
            if (!isEmpty(author)) {
                project.author = author;
            }

            const result = await project.save();

            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ error });
        }
    }
);

router.delete(
    "/projects/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const project = await Project.findByIdAndRemove(req.params.id);
            res.status(200).send(project);
        } catch (error) {
            res.status(500).send({ error });
        }
    }
);

module.exports = router;
