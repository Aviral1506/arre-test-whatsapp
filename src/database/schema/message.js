import mongoose from 'mongoose';

export const name = 'message';

export const schema = new mongoose.Schema(
    {
        message: String,  // content of the message
        created_by: { 
            type: mongoose.Schema.Types.ObjectId,  // user id of the user
            ref: 'user' },

        group_id: {
            type: mongoose.Schema.Types.ObjectId,  // group id of the group
            ref: 'group'
        },
        replies : Number,    // to keep track of number of replies of the message
        forwarded : Boolean   // to check if its a forwarded message
    },
    {
        timestamps: true,  // to keep track of when it was sent
    },
);

