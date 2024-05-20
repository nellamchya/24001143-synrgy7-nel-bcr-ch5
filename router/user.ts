import express from "express";
const router = express.Router();
const { login } = require('../services/users');

router.post('/login', login)

module.exports = router