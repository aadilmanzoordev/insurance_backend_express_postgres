import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendation';
import { errorHandler } from './middlewares/errorMiddleware';
import rateLimiter from './middlewares//rateLimiter';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/recommendation', recommendationRoutes);

app.use(errorHandler);

export default app;
