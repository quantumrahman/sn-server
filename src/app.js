import express from 'express';

import facilityRoute from './routers/facility.route.js';
import bookingRoute from './routers/booking.route.js';

import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.status(200).json({
        success: true,
        message: 'server working properly',
    })
);

app.use('/api/v1', facilityRoute);
app.use('/api/v1', bookingRoute);

app.use(errorMiddleware);

export default app;
