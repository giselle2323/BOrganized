import mongoose from 'mongoose';

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        username: {
            type:  String,
            required: [true, "can't be blank"],
            unique: true
        }
    },
        {
            timestamps: true
        },

    ), "Users"
);


exports.User = User;