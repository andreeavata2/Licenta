const Feedback = require("../models/Feedback");
const Helpers = require("../routes/api/Helpers");

module.exports.getFeedbackList = async res => {
    try {
        const feedback = await Feedback.find();
        return res.status(200).json({ data: feedback });
    } catch (err) {
        return res.status(500).json({ msg: "Went wrong on return feedbacks" });
    }
}


module.exports.addNewFeedback = async (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newFeedback
        .save()
        .then(message => res.status(201).json(message))
        .catch(err => console.log(err));

};

module.exports.deleteFeedback = async (req, res) => {
    const id = req.body.id;
    var feedback;

    try {
        feedback = await Feedback.findById(id);
    } catch (error) {
        return res.status(400).json(error);
    }

    if (feedback) {
        try {
            const removedStudent = await Feedback.findByIdAndRemove(id);
            return res.status(200).json(`The feedback posted by ${feedback.name} was successfully deleted`);
        } catch (error) {
            return res.status(404).json("error at delete");

        }
    } else {
        return res.status(404).json("Feedback not found in DB");
    }
}