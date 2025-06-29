import { addMessage, getUserMessages } from './messages.controller.js';
import { auth } from '../../middleware/auth.js';
import express from 'express';

export const messagesRouter = express.Router();

//get
messagesRouter.get('/', auth, getUserMessages);

//post
messagesRouter.post('/', auth, addMessage);
