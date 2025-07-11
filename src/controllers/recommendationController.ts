import { Request, Response, NextFunction } from 'express';
import { pool } from '../config/db';
import { getRecommendation } from '../services/recommendationService';

export async function submitRecommendation(req: Request, res: Response, next: NextFunction) {
  try {
    const { age, income, dependents, risk } = req.body;

    // call service for recommendation logic
    const { plan, reason } = getRecommendation({ age, income, dependents, risk });

    // Save submission to DB
    await pool.query(
      `INSERT INTO user_submissions (age, income, dependents, risk, recommendation, explanation)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [age, income, dependents, risk, plan, reason]
    );

    res.json({ plan, reason });
  } catch (error) {
    next(error);
  }
}
