import { userModel } from '../../../models/userModel.js';
import { sendEmail } from '../../emails/nodeMailer.js';
import bycript from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    const { name, email, password, age } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.json({ message: 'user already exists' });
    else {
        let hashPassword = bycript.hashSync(password, 8);
        await userModel.insertMany({
            name,
            email,
            password: hashPassword,
            age,
        });
        sendEmail({ email });
        res.json({ message: 'sign up success' });
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user && bycript.compareSync(password, user.password)) {
        const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY);
        res.json({ message: 'successfully signed in', token });
    } else {
        res.json({ message: 'error' });
    }
};

export const verify = async (req, res) => {
    const { token } = req.params;

    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.json('token err');
        } else {
            await userModel.findOneAndUpdate(
                { email: decoded.email },
                { verified: true }
            );
            res.json({ message: 'verified' });
        }
    });
};
