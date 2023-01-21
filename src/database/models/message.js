import Mongoose from 'mongoose';
import {name,schema} from '../schema/message.js';

const MessageModel = Mongoose.model(name, schema);

export { MessageModel };