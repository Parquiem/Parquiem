const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const User = require("../../models/User");


// @route POST api/transactions/add/:id
// @desc Registers a transaction
// @access Private
router.post('/add/:id', (req, res) => {
    let id = req.params.id;
    const newTransc = {
        cost : req.body.cost,
        lat : req.body.lat,
        lng : req.body.lng
    }
    User.findByIdAndUpdate(id, {$push: {purchases: newTransc}})
        .then(() => res.json({ success: true, newTransc}))
        .catch(err => res.status(404).json({ success: false, err}))
});

module.exports = router;