import express from 'express';
import {connectDB } from '../../db.js'

connectDB();

const app = express();
import { messageRoutes} from './message/message.js';

app.use(express.json())
app.listen(3000, () => {
    console.log('Server is up and running...')
})

app.use('/message', messageRoutes)





