import { messagesModel } from '../../../models/messageModel.js';

const addMessage = async (req, res) => {
    const { messageText, receivedId } = req.body;

    await messagesModel
        .insertMany({ messageText, receivedId })
        .then(() => {
            res.json({ message: 'successfully added message' });
        })
        .catch((err) => res.json({ message: 'error adding message', err }));
};

const getUserMessages = async (req, res) => {
    const { receivedId } = req.body;

    try {
        const userMessages = await messagesModel.find({ receivedId });

        userMessages.length > 0
            ? res.json({
                  message: 'successfully received messages',
                  userMessages,
              })
            : res.json({ message: 'this user has no messages' });
    } catch (error) {
        res.json({ message: 'error getting user message', error });
    }
};

export { addMessage, getUserMessages };
