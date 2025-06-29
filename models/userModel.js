import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [3, 'Name is too short'],
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            // minLength: [3, 'password is too short'],
            // maxLength: [30, 'password is too long']
        },
        age: {
            type: Number,
            min: 18,
            max: 60,
        },
        verified: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, //adds createdAt and updatedAt database values for the user
    }
);

export const userModel = mongoose.model('user', userSchema);
