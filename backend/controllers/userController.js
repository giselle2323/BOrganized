import Utils from "../utils";
import UserServices from "../services/userServices";

class UserController {
    //Signup 
    static async signUp(req, res) {
        try {
            const { email } = req.body;
            let { password } = req.body;
            const hashedPassword = Utils.hashedPassword(password);
            password = hashedPassword;
            const user = await UserServices.createUser({ email, password });
            // const token = Utils.generateToken({ email });
            res.set('Authorization', `Bearer ${token}`);
            return res.status(201).send({ user});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async signIn(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserServices.getUserByEmail(email);
            const {_id } = user;
            const checkPassword = Utils.comparePassword(password, user.password);
            if (checkPassword) {
                delete user.password;
                const token = Utils.generateToken({ email, _id });
                res.set('Authorization', `Bearer ${token}`);
                return res.status(200).send({ user, token });
            }
            return res.status(401).send('The email and password you entered does not exist! Please check and try again.');
        } catch (error) {
            if (error.name === 'emailNull') {
                return res.status(404).send('No user found for the provided email');
            }
            return res.status(500).send(error.message);
        }
    }

}

export default UserController;
