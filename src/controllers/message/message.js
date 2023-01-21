import {
    successCreate, successGet,
} from '../../response-template/index.js';

// services
import { createMessage } from '../../services/message/create.js';
import { getMessagesByGroup} from '../../services/message/get-by-group.js';


const createMessageHandler = async (req, res) => {

    const params = {
        payload: req.body,
    };

    const result = await createMessage(params);

    res.status(successCreate.STATUS_CODE).send({
        ...successCreate.response,
        response: {
            message: result,
        },
    });
};

const getMessagesByGroupHandler = async (req, res) => {
    try {

        const params = {
            payload: req.params,
        };

        const result = await getMessagesByGroup(params);

        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            response: {
                message: result,
            },
        });
    } catch (error) {
        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            message: error.message,
            response: {
                message: [],
            },
        });
    }
};



export {
    createMessageHandler,
    getMessagesByGroupHandler
};