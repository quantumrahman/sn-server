import { Router } from 'express';

const facilityRoute = Router();

import {
    createController,
    readsController,
    readController,
    updateController,
    deleteController,
} from '../controllers/facility.controllers.js';

import facilityValidate from '../middlewares/facility.validate.middleware.js';

facilityRoute.route('/facilities').post(facilityValidate, createController);

facilityRoute.route('/facilities').get(readsController);

facilityRoute.route('/facilities/:id').get(readController);

facilityRoute.route('/facilities/:id').patch(updateController);

facilityRoute.route('/facilities/:id').delete(deleteController);

export default facilityRoute;
