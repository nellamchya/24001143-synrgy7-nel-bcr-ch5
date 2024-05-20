import express from "express";
const router = express.Router();
const { getAll } = require("../services/orders")
const middleware = require('../middlewares/auth')

router.get('/', middleware.auth, middleware.is_admin, getAll)

module.exports = router