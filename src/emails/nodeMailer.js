import { createTransport } from 'nodemailer';
import { htmlEmailTemplateCode } from './html.js';
import jwt from 'jsonwebtoken';

export const sendEmail = async (options) => {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'zbengai0d@gmail.com',
            pass: process.env.GMAIL_CODE,
        },
    });

    var token = jwt.sign({ email: options.email }, process.env.SECRET_KEY);

    const info = await transporter.sendMail({
        from: '"Learn nodemailer" <zbengai0d@gmail.com>',
        to: options.email, //user email passed in through the signUp function
        subject: 'Hello ✔',
        html: htmlEmailTemplateCode(`http://localhost:3000/verify/${token}`), // HTML body that is displayed in the user email
    });
    console.log('Message sent:', info);
};
