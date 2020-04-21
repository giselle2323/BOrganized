import Schema from './schema';
import validate from './validate';


class InputValidator {
    static validateUser(req, res, next) {
        const user = {...req.body };
        return validate(user, Schema.createUserSchema(), req, res, next);

    }
    
    static validateLogin(req, res, next) {
        const login = {...req.body };
        return validate(login, Schema.loginSchema(), req, res, next);
    }
}
export default InputValidator;