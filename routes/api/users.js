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
  module.exports = router;