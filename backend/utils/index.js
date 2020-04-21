import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class Utils {
    //Hash password
    static hashedPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));

    }

    //compare password
    static comparePassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }

    //generate token
    static generateToken(payload) {
        return jwt.sign(payload, process.env.SECRET, { expiresIn: '2h' });
    }

    //decode token
    static decodeToken(token) {
        return jwt.verify(token, process.env.SECRET)
    }

}
export default Utils;
