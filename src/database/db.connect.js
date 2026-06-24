import mongoose from 'mongoose';
import config from '../configs/env.config.js';

const dbConnect = async () => {
    try {
        const uri = config.database_uri;

        await mongoose.connection.on('connected', () => {
            console.log('mongoose connection successfully');
        });

        await mongoose.connection.on('error', (err) => {
            console.log('mongoose connection failure', err.message);
        });

        await mongoose.connect(uri);
    } catch (error) {
        console.log('mongoose connection error', error.message);
    }
};

export default dbConnect;
