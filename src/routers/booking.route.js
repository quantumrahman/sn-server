import { Router } from 'express';

const bookingRoute = Router();

import {
    createController,
    readsController,
    readController,
    updateController,
} from '../controllers/booking.controllers.js';

import bookingValidate from '../middlewares/booking.validate.middleware.js';

bookingRoute.route('/bookings').post(bookingValidate, createController);

bookingRoute.route('/bookings').get(readsController);

bookingRoute.route('/bookings/:id').get(readController);

bookingRoute.route('/bookings/:id').patch(updateController);

export default bookingRoute;
