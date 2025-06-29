import { signIn, signUp, verify } from './user.controller.js';
import { auth } from '../../middleware/auth.js';
import express from 'express';

export const userRouter = express.Router();

//post
userRouter.post('/signIn', auth, signIn);
userRouter.post('/signUp', signUp);

//get
userRouter.get('/verify/:token', verify);
