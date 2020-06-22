const Announcement = require("../models/Announcement");
const Helpers = require("../routes/api/Helpers");

module.exports.getAnnouncementsList = async res => {
    try {
        const announcement = await Announcement.find();
        return res.status(200).json({ data: announcement });
    } catch (err) {
        return res.status(500).json({ msg: "Went wrong on return announcements" });
    }
}


module.exports.addNewAnnouncement = async (req, res) => {
    const newAnnouncement = new Announcement({
        title: req.body.title,
        name: req.body.name,
        date: req.body.date,
        message: req.body.message,
        typeAnnouncement: req.body.typeAnnouncement
    });

    newAnnouncement
        .save()
        .then(message => res.status(201).json(message))
        .catch(err => console.log(err));

};

module.exports.deleteAnnouncement = async (req, res) => {
    const id = req.params.id;
    var announcement;

    try {
        announcement = await Announcement.findById(id);
    } catch (error) {
        return res.status(400).json(error);
    }

    if (announcement) {
        try {
            const removedAnnouncement = await Announcement.findByIdAndRemove(id);
            return res.status(200).json(`The announcement posted by ${announcement.name} was successfully deleted`);
        } catch (error) {
            return res.status(404).json({err:"error at delete"});

        }
    } else {
        return res.status(404).json({err:"Announcement not found in DB"});
    }
}