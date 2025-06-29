import mongoose from 'mongoose';

export function dbConnection() {
    mongoose
        .connect(`${process.env.ENV_MONGODB_URL}`)
        .then(() => {
            console.log('db connected');
        })
        .catch((error) => {
            console.log('db error:', error);
        });
}
