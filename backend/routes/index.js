import express from 'express';
import userRoutes from './user';
import categoryRoutes from './category';
import itemRoutes from './listItem';

const router = express.Router();

// Home
router.get('/', (req, res) => res.status(301).redirect('api/v1'));
router.get('/v1', (req, res) => res.status(200).json({
    status: res.statusCode,
    message: 'Welcome to BORGANIZED version 1',
}));

router.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to version 1 of BORGANIZED API' });
});

// Routes
router.use('/v1/auth', userRoutes);
router.use('/v1/category', categoryRoutes);
router.use('/v1/item', itemRoutes);

export default router;