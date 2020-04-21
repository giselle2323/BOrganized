import express from 'express';
import UserController from '../controllers/userController';
import UserMiddleware from '../middlewares/userMiddleware';
// import Inputvalidator from '../validation/inputvalidator';
// import AuthenticateUser from '../middlewares/authenticate';


const { signUp, signIn } = UserController;
const { checkUserExists, doesUserExists } = UserMiddleware;
// const { validateUser, validateLogin } = Inputvalidator;
// const { verifyToken } = AuthenticateUser;

const userRoutes  = express.Router();

userRoutes.post('/signup', checkUserExists, signUp);
userRoutes.post('/login',  doesUserExists, signIn);
export default userRoutes;