import { z } from 'zod';

const bookingCreateValidator = z.object({
    booking_date: z
        .string({ error: 'Booking date field is required' })
        .min(1, 'Booking date is required')
        .trim(),
    time_slot: z
        .string({ error: 'Time slot field is required' })
        .min(1, 'Time slot field is required')
        .trim(),
    hours: z
        .number({ error: 'Hours field is required' })
        .min(1, 'Hours is required')
        .positive('Hours cannot be negative'),
    total_price: z
        .number({ error: 'Total price field is required' })
        .min(0, 'Total price is required')
        .positive('Total price cannot be negative'),
});

export default bookingCreateValidator;
