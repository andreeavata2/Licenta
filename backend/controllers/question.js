const Question = require("../models/Question");

module.exports.getQuestionsList = async res => {
    try {
        const question = await Question.find();
        return res.status(200).json({ data: question });
    } catch (err) {
        return res.status(500).json({ msg: "Went wrong on return announcements" });
    }
}


module.exports.addNewQuestion = async (req, res) => {
    const newQuestion = new Question({
        question: req.body.question,
        answers: req.body.answers
    });

    newQuestion
        .save()
        .then(message => res.status(201).json(message))
        .catch(err => console.log(err));

};

module.exports.deleteQuestion = async (req, res) => {
    const id = req.params.id;
    var question;

    try {
        question = await Question.findById(id);
    } catch (error) {
        return res.status(400).json(error);
    }

    if (question) {
        try {
            const removedQuestion = await Question.findByIdAndRemove(id);
            return res.status(200).json(`The question with id ${question._id} was successfully deleted`);
        } catch (error) {
            return res.status(404).json({ err: "error at delete" });

        }
    } else {
        return res.status(404).json({ err: "Question not found in DB" });
    }
}

module.exports.updateQuestion = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    req = req.body;
    // req = JSON.parse(req);
    console.log(req)

    var question;
    try {
        question = await Question.findById(id)
    } catch (err) {
        return res.status(404).json({ err: "error at search for Id" });
    }
    console.log(question)
    var tempQuestion = {};

    if (req.question) {
        tempQuestion.question = req.question;
    }
    if (req.answers) {
        tempQuestion.answers = req.answers;
    }
    console.log(tempQuestion);

    if (question) {
        try {
            const questionPatch = await Question.findByIdAndUpdate(id, {$push: tempQuestion}, { useFindAndModify: false });
            return res.status(200).json({ data: `question with id: ${id} successfully updated` });
        } catch (err) {
            return res.status(404).json({ err: 'error at patch : Question not found in DB' });
        }
    } else {
        return res.status(404).json({ err: "error at patch" });
    }
}