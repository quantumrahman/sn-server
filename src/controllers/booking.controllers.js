import * as BookingSevices from '../services/booking.services.js';

export const createController = async (req, res, next) => {
    try {
        const booking = await BookingSevices.createService();

        return res.status(200).json({
            success: true,
            message: 'Booking create successfully',
            data: booking || {},
        });
    } catch (error) {
        next(error);
    }
};

export const readsController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking reads successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const readController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking read successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking update successfully',
        });
    } catch (error) {
        next(error);
    }
};
