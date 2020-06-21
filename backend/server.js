const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const port = process.env.PORT || 5000;
const cors = require('cors');
const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const feedback = require("./routes/api/feedback");
const announcement = require("./routes/api/announcements");

const app = express();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cors())
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use('/api/messages', messages);
app.use('/api/feedback', feedback);
app.use('/api/announcement', announcement);




// app.get('/chat', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });



// app.listen(port, () => console.log(`Server up and running on port ${port} !`));
app.listen(port, function(){
    console.log('listening on *:' + port);
  });
