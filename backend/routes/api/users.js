const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const userControllers = require("../../controllers/student");

// route POST api/users/delete
// delete a student from id
router.delete("/delete", async (req, res) => {
    const id = req.body.id;
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
})

// @route POST api/users/register
// @desc Register user
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                typeUser: req.body.typeUser,
                licenseTeacher: req.body.licenseTeacher
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


// @route Get api/users/login
// @desc Login user and return JWT token
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    typeUser: user.typeUser,
                    licenseTeacher: user.licenseTeacher
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            // body: user
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});


//route GET api/users/
//return all list of students
router.get("/", async (req, res) => {
    try {
        const students = await User.find();
        return res.status(200).json({ data: students });
    } catch (error) {
        return res.status(500).json({ msg: "Went wrong" });
    }

})

router.patch("/:id", async (req, res) => {
    userControllers.updateUserProfile(req, res);
})

module.exports = router;