const User = require("../models/User");


module.exports.getList = async res => {
    try {
        const students = await User.find();
        return res.status(200).json({data: students});
    } catch (err) {
        return res.status(500).json({msg: "Went wrong"});
    }
}

module.exports.deleteStudentById = async (res, id) => {
    var student;

    try {
        student = await User.findById(id);
    } catch (error) {
        return res.status(400).json(error);
    }

    if (student) {
        try {
            const removedStudent = await User.findByIdAndRemove(id);
            return res.status(200).json(`student ${student.name} was deleted`);
        } catch (error) {
            return res.status(404).json("error at delete");

        }
    } else {
        return res.status(404).json("Student not found in DB");
    }

}