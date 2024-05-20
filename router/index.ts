import express from "express";
const router = express.Router()
const user = require('./user')
const car = require('./car')
const order = require('./order')

router.use('/users', user)
router.use('/cars', car)
router.use('/orders', order)

module.exports = router
