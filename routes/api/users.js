const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const auth = require("../auth");
const multer = require('multer');
const cors= require("cors");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage });
//Validacion de input
const validateRegisterInput = require("../../validation/register");
const validateEditInput = require("../../validation/edit");
const validateLoginInput = require("../../validation/login");

//Usamos el modelo de usuario
const User = require("../../models/User");

router.use(cors());

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
                    .then(user => bcrypt.compare(req.body.password, newUser.password).then(isMatch => {
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
                              user: payload,
                              success: true,
                              token
                            });
                          }
                        );
                      } else {
                        return res
                          .status(400)
                          .json({ passwordincorrect: "Password incorrect" });
                      }
                    }))
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
                id: user.id,
                token
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
router.delete('/delete/:id', auth.required,(req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => res.json({ success: true}))
  .catch(err => res.status(404).json({ success: false }))
});


// @route GET api/users/:id
// @desc views one user
// @access public
router.get('/getUser/:id',(req, res) => {
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
	
router.put('/update/:id', auth.required,(req, res) => {
	const {errors, isValid } = validateEditInput(req.body);

  if (!isValid) {
        return res.status(400).json(errors);
  }else{
  let id = req.params.id;
	let data = {
		name : req.body.name,
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


//TODO:
// @route PUT api/users/update/:id
// @desc updates a user profile pic
// @access private
router.post('/update/:id/', upload.single('profilePic'), (req, res) => {
    let id = req.params.id;
    const newProfilePic = {
      profilePic : {
        path : req.file.path,
        originalName : req.file.originalname
      }
    };
    User.findByIdAndUpdate(id, newProfilePic)
      .then(() => res.json({ success: true, newProfilePic}))
      .catch(err => res.status(404).json({ success: false, err}))
  
});

// @route POST api/users/car/:id
// @desc adds cars for user
// @access private
router.post('/car/:id',auth.required,(req, res) => {
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

// @route DELETE api/users/carDelete/:CarId
// @desc deletes cars for user
// @access private
router.delete('/carDelete/:userId/:carId', (req, res) => {
  let userId = req.params.userId;
  let carId = req.params.carId;
  User.updateOne({'_id': userId},{$pull: {'car': {'_id': carId}}})
    .then(() => res.json({msg: `Se borro el carro con el id ${carId}`}))
    .catch(err => res.status(404).json({ success: false, err }));
});




module.exports = router;