import { MessageModel } from '../../database/models/message.js';


const createMessage = async (params) => {
    const {
        payload,
    } = params;

    const {
       message,
       group_id,
       user_id,
    } = payload;

   
    const messageParams = {
       message,
        created_by: user_id,
        group_id,
        replies : 0,
        forwarded : false
    };

    const newModel = new MessageModel(messageParams);

    const result = await newModel.save();
    
    return result;
};

export { createMessage };