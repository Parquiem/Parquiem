const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");


const users = require("./routes/api/users");
const transactions = require('./routes/api/transactions');
// const sensors = require('./routes/api/sensors');


const app = express();

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;// Connect to MongoDB
mongoose
.set('useFindAndModify', false)
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // const mqttHandler = require('./MqttHandler');
  // const mqttClient = new mqttHandler();

  // mqttClient.connect();

  const pubSubHandler = require('./PubSub');
  const pubSubClient = new pubSubHandler();

  pubSubClient.connect();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/transactions", transactions);
//app.use("/api/sensors", sensors);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));