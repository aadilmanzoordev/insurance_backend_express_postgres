"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitRecommendation = submitRecommendation;
const db_1 = require("../config/db");
const recommendationService_1 = require("../services/recommendationService");
async function submitRecommendation(req, res, next) {
    try {
        const { age, income, dependents, risk } = req.body;
        // call service for recommendation logic
        const { plan, reason } = (0, recommendationService_1.getRecommendation)({ age, income, dependents, risk });
        // Save submission to DB
        await db_1.pool.query(`INSERT INTO user_submissions (age, income, dependents, risk, recommendation, explanation)
       VALUES ($1, $2, $3, $4, $5, $6)`, [age, income, dependents, risk, plan, reason]);
        res.json({ plan, reason });
    }
    catch (error) {
        next(error);
    }
}
