import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
    {
        messageText: {
            type: String,
            required: true,
        },
        receivedId: mongoose.Schema.ObjectId,
    },
    { timestamps: true }
);

export const messagesModel = mongoose.model('messages', messageSchema);
