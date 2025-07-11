import express from 'express';
import { submitRecommendation } from '../controllers/recommendationController';
import { validateRecommendation } from '../middlewares/validationMiddleware';

const router = express.Router();

router.post('/', validateRecommendation, submitRecommendation);

export default router;
