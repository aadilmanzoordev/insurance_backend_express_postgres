import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const recommendationSchema = Joi.object({
  age: Joi.number().integer().min(0).required(),
  income: Joi.number().min(0).required(),
  dependents: Joi.number().integer().min(0).required(),
  risk: Joi.string().valid('low', 'medium', 'high').required(),
});

export function validateRecommendation(req: Request, res: Response, next: NextFunction) {
  const { error } = recommendationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}
