import { z } from 'zod';

const facilityCreateValidate = z.object({
    name: z
        .string({ error: 'Name field is required' })
        .min(1, 'Name is required')
        .trim(),
    facility_type: z.enum(
        [
            'Football Turf',
            'Cricket Turf',
            'Badminton Court',
            'Tennis Court',
            'Basketball Court',
            'Swimming Pool',
        ],
        { error: 'Facility type field is required' }
    ),
    image: z.url('Image field is required').trim(),
    location: z
        .string({ error: 'Location field is required' })
        .min(1, 'Location is required')
        .trim(),
    available_slots: z
        .string({ error: 'Availalbe time slots field is required' })
        .min(1, 'Available time slots are required')
        .trim(),
    price_per_hour: z.coerce
        .number({ error: 'Price per hour field is required' })
        .min(0, 'Price per hour is required')
        .positive('Price per hour cannot be negative'),
    capacity: z.coerce
        .number({ error: 'Capacity field is required' })
        .min(1, 'Capacity is required')
        .positive('Capacity cannot be negative'),
    description: z
        .string({ error: 'Description field is required' })
        .min(1, 'Description is required')
        .trim(),
    owner_email: z
        .email({ error: 'Owner email field is required' })
        .trim()
        .lowercase(),
});

export default facilityCreateValidate;
