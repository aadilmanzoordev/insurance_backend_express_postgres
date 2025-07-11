"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const recommendation_1 = __importDefault(require("./routes/recommendation"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const rateLimiter_1 = __importDefault(require("./middlewares//rateLimiter"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(rateLimiter_1.default);
app.use('/recommendation', recommendation_1.default);
app.use(errorMiddleware_1.errorHandler);
exports.default = app;
