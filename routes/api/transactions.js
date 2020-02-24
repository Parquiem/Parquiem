const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const User = require("../../models/User");


// @route POST api/transactions/add
// @desc Registers a transaction
// @access Private

