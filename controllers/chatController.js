const asyncHandler = require("express-async-handler");
const Chat = require("../Model/chatModel");

const accessChat = asyncHandler(async (req, res) => {

    const { userId } =  req.body;
    if (!userId) {
        res.status(400);
        throw new Error("Please enter userId");
    }

    var isChat = await Chat.findOne({ 
        isGroupChat : false,
        $and : [
            {users: {$elemMatch: {$eq: req.user_id}}},
            {users: {$elemMatch: {$eq: userId}}}
        ]

         });
});