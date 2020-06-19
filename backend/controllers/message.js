const Message = require("../models/Message");
const Helpers = require("../routes/api/Helpers");

module.exports.getMessagesList = async res => {
    try {
        const messages = await Message.find();
        return res.status(200).json({ data: messages });
    } catch (err) {
        return res.status(500).json({ msg: "Went wrong on return messages" });
    }
}


module.exports.addNewMessage = async (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });

    newMessage
        .save()
        .then(message => res.status(201).json(message))
        .catch(err => console.log(err));

};