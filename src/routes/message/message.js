import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

import {
  createMessageHandler,
  getMessagesByGroupHandler
} from '../../controllers/message/message.js';

router.post(
    '/',
    expressAsyncHandler(createMessageHandler),
);


router.get('/:group_id',
expressAsyncHandler(getMessagesByGroupHandler));


export {router as messageRoutes}