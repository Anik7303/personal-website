const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        keywords: [
            {
                type: String,
            },
        ],
        link: {
            type: String,
        },
        githubRepo: {
            https: {
                type: String,
            },
            ssl: {
                type: String,
            },
        },
        author: {
            type: String,
            default: "Anik Mohammad",
        },
    },
    {
        timestamps: true,
    }
);

mongoose.model("project", projectSchema);
