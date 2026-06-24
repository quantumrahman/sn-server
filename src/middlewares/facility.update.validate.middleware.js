import facilityUpdateValidator from '../validators/facility.update.validator.js';

const facilityUpdateMiddleware = (req, res, next) => {
    const result = facilityUpdateValidator.safeParse(req.body);

    if (!result.success) {
        return next(result.error);
    }

    req.body = result.data;

    return next();
};

export default facilityUpdateMiddleware;
