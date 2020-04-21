import express from 'express';
import ListItemController from '../controllers/listItemController';
import AuthenticateUser from '../middlewares/authenticate';


const { createItem, editItem, deleteItem } = ListItemController;
const { verifyToken } = AuthenticateUser;

const itemRoutes = express.Router();

itemRoutes.post('/createitem', verifyToken, createItem);
itemRoutes.post('/edititem/:id', verifyToken, editItem );
itemRoutes.post('/deleteitem/:id', verifyToken, deleteItem );

export default itemRoutes;