const User = require("../models/User");


module.exports.getList = async res => {
    try {
        const students = await User.find();
        return res.status(200).json({ data: students });
    } catch (err) {
        return res.status(500).json({ msg: "Went wrong" });
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

module.exports.updateUserProfile = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body)
    var user;

    try {
        user = await User.findById(id);
    } catch (error) {
        return res.status(400).json(error);
    }

    console.log(user)
    var tempUser = {};

    if (req.body.name) {
        tempUser.name = req.body.name;
    }
    if (req.body.email) {
        tempUser.email = req.body.email;
    }
    if (req.body.typeUser) {
        tempUser.typeUser = req.body.typeUser;
    }
    if (req.body.licenseTeacher) {
        tempUser.licenseTeacher = req.body.licenseTeacher;
    }
    console.log(tempUser);

    if (user) {
        try {
            const userPatch = await User.findByIdAndUpdate(id, tempUser, { useFindAndModify: false });
            return res.status(200).json({ data: `user with id: ${id} successfully updated` });
        } catch (err) {
            return res.status(404).json({ err: 'error at patch : User not found in DB' });
        }
    } else {
        return res.status(404).json({ err: "error at patch" });
    }
}