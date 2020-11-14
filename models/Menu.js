const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

mongoose.model("menu", menuSchema);
