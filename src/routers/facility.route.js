import { Router } from 'express';

const facilityRoute = Router();

facilityRoute.route('/facilities').post((req, res) =>
    res.status(200).json({
        success: true,
        message: 'POST -> Create facility',
    })
);

facilityRoute.route('/facilities').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Reads facilities',
    })
);

facilityRoute.route('/facilities/:id').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Read facility',
    })
);

facilityRoute.route('/facilities/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'PATCH -> Update facility',
    })
);

facilityRoute.route('/facilities/:id').delete((req, res) =>
    res.status(200).json({
        success: true,
        message: 'DELETE -> Delete facility',
    })
);

export default facilityRoute;
