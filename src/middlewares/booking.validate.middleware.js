import bookingValidator from '../validators/booking.validator.js';

const bookingValidateMiddleware = (req, res, next) => {
    const result = bookingValidator.safeParse(req.body);

    if (!result.success) {
        return next(result.error);
    }

    req.body = result.data;

    return next();
};

export default bookingValidateMiddleware;
