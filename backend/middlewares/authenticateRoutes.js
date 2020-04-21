const jwt = require('jsonwebtoken');
export default class AuthenticateRoutes {
   static authenticateAllRoutes(req, res, next) {
        const token = req.header('Authorization');
        if (!token) return res.status(401).send('Access denied. No token provided.');

        try {
            const decoded = jwt.verify(token, process.env.SECRET);
            req.user = decoded;
            console.log(req.user);
            next();
        }
        catch (ex) {
            res.status(400).send('Invalid token.');
        }
    }
 }