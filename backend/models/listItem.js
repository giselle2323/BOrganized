
const mongoose = require('mongoose');

const Item = mongoose.model(
    "Item",
    new mongoose.Schema({
        name: {
            type: String
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        status: {
            type: String
        }
    },
        {
            timestamps: true
        },

    ), "Item"
);


exports.Item = Item;