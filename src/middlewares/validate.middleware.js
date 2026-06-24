import facilityValidator from '../validators/facility.validator.js';

const validateMiddleware = (req, res, next) => {
    const result = facilityValidator.safeParse(req.body);

    if (!result.success) {
        return next(result.error);
    }

    req.body = result.data;

    return next();
};

export default validateMiddleware;
