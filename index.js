import express from 'express';
import { dbConnection } from './databases/dbConnection.js';
import { userRouter } from './src/modules/user/user.routes.js';
import { messagesRouter } from './src/modules/messages/messages.routes.js';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use('/messages', messagesRouter);

dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
