const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

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
            name: user.name
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
                token: "Bearer " + token
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
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => res.json({ success: true}))
  .catch(err => res.status(404).json({ success: false }))
});

//TODO
// @route POST api/users/:id
// @desc Adds parkoins to user
// @access private


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
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
  });

// @route PUT api/users/:id
// @desc updates a user
// @access private
	
router.put('/:id', (req, res) => {
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
    parkoins : req.body.parkoins
	}
 
	// save the user
	User.findByIdAndUpdate(id, data).then(() => res.json({ success: true}))
  .catch(err => res.status(404).json({ success: false }))
  }
	
});


module.exports = router;