const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
// const parquimetro = require('./routes/api/parquimetro');


const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);


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


  io.on('connection', (socket) => {
      console.log("Usuario conectado");   
      // Evento lanzado por parte del ESP32
      socket.on('isOccupiedESP', data => {
          //Evento lanzado para el cliente
          socket.emit('isOcuppiedClient', data);
      });

      //Evento lanzado por parte del cliente lanzando los tiempos
      socket.on('tiempos', data => {
          //Evento para el ESP32, recibira y mostrar el tiempo
          socket.emit('tiempoESP', data);
      });
  });

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
// app.use("/api/parquimetro", parquimetro);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));