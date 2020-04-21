import express from 'express';
import CategoryController from '../controllers/categoryController';
import AuthenticateUser from '../middlewares/authenticate';


const { createCategory, getCategory } = CategoryController;
const { verifyAdmin, verifyToken } = AuthenticateUser;

const categoryRoutes = express.Router();

categoryRoutes.post('/createcategory', verifyToken, verifyAdmin, createCategory);
categoryRoutes.get('/getcategory', getCategory);
// userRoutes.post('/login', validateLogin, doesUserExists, signIn);
export default categoryRoutes;