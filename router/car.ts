import express from "express";
const router = express.Router();
const { getAll, editCar, deleteCar, addCar } = require("../services/cars")
const middleware = require('../middlewares/auth')

router.get('/', middleware.auth, getAll)
router.post('/', middleware.auth, middleware.is_admin, addCar)
router.put('/:id', middleware.auth, middleware.is_admin, editCar)
router.delete('/:id', middleware.auth, middleware.is_admin, deleteCar)

module.exports = router