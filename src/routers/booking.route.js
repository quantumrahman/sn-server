import { Router } from 'express';

const bookingRoute = Router();

bookingRoute.route('/bookings').post((req, res) =>
    res.status(200).json({
        success: true,
        message: 'POST -> Create booking',
    })
);

bookingRoute.route('/bookings').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Reads bookings',
    })
);

bookingRoute.route('/bookings/:id').get((req, res) =>
    res.status({
        success: true,
        message: 'GET -> Read booking',
    })
);

bookingRoute.route('/bookings/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'PATCH -> Update booking',
    })
);

export default bookingRoute;
