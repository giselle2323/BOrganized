import { User } from "../models/user";

export default class userServices {
    static async createUser(userData) {
        const dataValues = await User.create(userData);
        delete dataValues.password;
        return dataValues;

    }

    static async getUserByEmail(email) {
        const data = await User.findOne({ email: email});
        return data;

    }


}
