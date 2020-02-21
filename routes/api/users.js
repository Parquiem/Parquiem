const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const auth = require("../auth");
const multer = require('multer');
const upload = multer({dest:'uploads/'});
//Validacion de input
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Usamos el modelo de usuario
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    //Validacion de la forma
    const {errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists"});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password
            });

            //Hasheamos las passwords antes de guardarlas en la BD
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

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Validacion
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Busca el usuario por email
    User.findOne({ email }).then(user => {
      // Valida si el usuario existe
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }//Checa la password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // Se crea el payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            parkoins: user.parkoins,
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
                token: "Token " + token
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

// @route DELETE api/users/:id
// @desc Delete user account
// @access Private
router.delete('/delete/:id', auth.required, (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => res.json({ success: true}))
  .catch(err => res.status(404).json({ success: false }))
});


// @route GET api/users/:id
// @desc views one user
// @access public
router.get('/getUser/:id', (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: `No such user.` });
    });
});

// @route GET api/users/getUsers
// @desc views all users
// @access private
router.get('/getUsers', (req, res) => {
  User.find({})
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: `Something went wrong. ${err}` });
    });
  });

// @route PUT api/users/update/:id
// @desc updates a user
// @access private
	
router.put('/update/:id', auth.required, (req, res) => {
	const {errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
        return res.status(400).json(errors);
  }else{
  let id = req.params.id;
	let data = {
		name : req.body.name,
    email : req.body.email,
    phoneNumber: req.body.phoneNumber,
    password : req.body.password,
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.password, salt, (err, hash) => {
        if (err) throw err;
        data.password = hash;
        // save the user
        User.findByIdAndUpdate(id, data).then(() => res.json({ success: true}))
        .catch(err => res.status(404).json({ success: false }))
    });
});
  }	
});

// @route PUT api/users/update/:id
// @desc updates a user profile pic
// @access private
router.post('/update/:id/', upload.single('profilePic'), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

// @route POST api/users/car/:id
// @desc adds cars for user
// @access private
router.post('/car/:id', auth.required,(req, res) => {
  let id = req.params.id;
  const newCar = {
    carModel : req.body.carModel,
    color :    req.body.color,
    plates:    req.body.plates
  }

  User.findByIdAndUpdate(id,{$push: {car: newCar}})
    .then(() => res.json({ success: true, newCar}))
    .catch(err => res.status(404).json({ success: false, err }))
  
});

// @route PUT api/users/carUpdate/:CarId
// @desc adds cars for user
// @access private
router.put('/carUpdate/:carId', auth.required,(req, res) => {
  let carId = req.params.carId;
  let data = {
    car : [
      {
        carModel : req.body.carModel,
        color :    req.body.color,
        plates:    req.body.plates
      }
    ]
  }
 User.findByIdAndUpdate(carId, data).then(() => res.json({ success: true, data}))
        .catch(err => res.status(404).json({ success: false }))
});
// @route PUT api/users/carDelete/:CarId
// @desc deletes cars for user
// @access private
router.delete('/carDelete/:id/:carId', auth.required, (req, res) => {
  let carId = req.params.carId;
  let id = req.params.id;
  User.update(id,{$pull: {car: { carId }}})
    .then(() => res.json({ success: true, newCar}))
    .catch(err => res.status(404).json({ success: false, err }))
  
});



module.exports = router;