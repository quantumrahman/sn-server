import Facility from '../models/facility.model.js';
import AppError from '../utils/app.error.js';

export const createService = async (payload) => {
    const facilityExists = await Facility.findOne({ name: payload.name });

    if (facilityExists) {
        throw new AppError(400, 'Facility already exists');
    }

    return await Facility.create({
        ...payload,
        available_slots: payload.available_slots
            .split(',')
            .map((slot) => slot.trim())
            .filter(Boolean),
    });
};

export const readsService = async () => {
    console.log('reads facility');
};

export const readService = async () => {
    console.log('read service');
};

export const updateService = async () => {
    console.log('update service');
};

export const deleteService = async () => {
    console.log('delete service');
};
