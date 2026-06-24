import { z } from 'zod';

const facilityUpdateValidate = z.object({
    name: z.string().trim().min(1, 'Name cannot be empty').optional(),
    facility_type: z
        .enum([
            'Football Turf',
            'Cricket Turf',
            'Badminton Court',
            'Tennis Court',
            'Basketball Court',
            'Swimming Pool',
        ])
        .optional(),
    image: z.string().trim().url('Invalid image URL').optional(),
    location: z.string().trim().min(1, 'Location cannot be empty').optional(),
    available_slots: z
        .string()
        .trim()
        .min(1, 'Available time slots cannot be empty')
        .optional(),
    price_per_hour: z.coerce
        .number()
        .positive('Price per hour must be greater than 0')
        .optional(),
    capacity: z.coerce
        .number()
        .int('Capacity must be a whole number')
        .positive('Capacity must be greater than 0')
        .optional(),
    description: z
        .string()
        .trim()
        .min(1, 'Description cannot be empty')
        .optional(),
    owner_email: z
        .string()
        .trim()
        .toLowerCase()
        .email('Invalid owner email')
        .optional(),
});

export default facilityUpdateValidate;
