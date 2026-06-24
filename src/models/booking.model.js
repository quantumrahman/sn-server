import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        facility_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Facility',
        },
        user_email: {
            type: String,
            required: [true, 'User email is required'],
            trim: true,
            lowercase: true,
        },
        booking_date: {
            type: Date,
            required: [true, 'Booking date is required'],
        },
        time_slot: {
            type: String,
            required: [true, 'Time slot is required'],
            trim: true,
        },
        hours: {
            type: Number,
            required: [true, 'Hours is required'],
            min: 1,
        },
        total_price: {
            type: Number,
            required: [true, 'Total price is required'],
            min: 0,
        },
        status: {
            type: String,
            default: 'Pending',
            enum: ['Pending', 'Cancelled'],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
