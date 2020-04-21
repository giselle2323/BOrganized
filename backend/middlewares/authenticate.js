import Utils from '../utils';
import UserServices from '../services/userServices';

export default class AuthenticateUser {
    //Verify Token
    static async verifyToken(req, res, next) {
        let token = req.headers.authorization;
        if(!token) {
            return res.status(401).send('Unauthorized Access');
        }
        token = token.split(' ')[1];

        try {
            const decoded =  Utils.decodeToken(token);
            let user = await UserServices.getUserByEmail(decoded.email);
            if(!user) {
                return res.status(401).send('Invalid Token');
            }
            req.user = user;
            return next();
        } catch(error) {
            return res.status(500).send(error);
        }
    }

    //Verify Admin
    static verifyAdmin(req, res, next) {
        if (!req.user.isAdmin) {
            console.log(req.user);
            return res.status(403).send('Forbidden');
        }
        return next();
    }
}
