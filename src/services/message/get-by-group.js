import { MessageModel } from '../../database/models/message.js';
import { isEmpty } from 'lodash-es';

const getMessagesByGroup = async (params) => {
    const {
        payload
    } = params;

    const {
        group_id,
    } = payload;

    const messageQuery = {
        group_id
    }

    const limitValue = 10; // for max 10 messages per request

    const result = await MessageModel.find(messageQuery).limit(limitValue);
    if (isEmpty(result) === true) {
        throw new Error('no messages in group');   // to handle no messages in group case
    }
    return result;
};

export { getMessagesByGroup };