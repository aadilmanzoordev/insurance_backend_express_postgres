"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRecommendation = validateRecommendation;
const joi_1 = __importDefault(require("joi"));
const recommendationSchema = joi_1.default.object({
    age: joi_1.default.number().integer().min(0).required(),
    income: joi_1.default.number().min(0).required(),
    dependents: joi_1.default.number().integer().min(0).required(),
    risk: joi_1.default.string().valid('low', 'medium', 'high').required(),
});
function validateRecommendation(req, res, next) {
    const { error } = recommendationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
