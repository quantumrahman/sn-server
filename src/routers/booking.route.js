import { Router } from 'express';

const bookingRoute = Router();

import {
    createController,
    readsController,
    readController,
    updateController,
} from '../controllers/booking.controllers.js';

bookingRoute.route('/bookings').post(createController);

bookingRoute.route('/bookings').get(readsController);

bookingRoute.route('/bookings/:id').get(readController);

bookingRoute.route('/bookings/:id').patch(updateController);

export default bookingRoute;
