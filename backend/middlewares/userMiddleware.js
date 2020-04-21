import Utils from '../utils';
import UserServices from '../services/userServices';


export default class UserMiddlewares {
    static async checkUserExists(req, res, next) {
        try {
            const { email } = req.body;
            const data = await UserServices.getUserByEmail(email);
            if (!data) return next();
            return res.status(409).send('Unsuccesful, user already exists, kindly use a different email. ');
        } catch(error) {
            return res.status(500).send(error.message);
        }

    }

    static async doesUserExists(req, res, next) {
        try {
            const { email } = req.body;
            const data = await UserServices.getUserByEmail(email);
            if(data) {
                req.user = data.dataValues;
                return next();
            }
            res.status(404).send('Unsuccesful, User does not exist');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
    
}