import { NextFunction, Request, Response } from 'express'
import { CarsModel } from '../model/car.model'
import { raw } from 'objection';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const type = req.query.type as string | undefined

  try {
    const cars = await CarsModel.query().where((builder) => {
      if (type) {
        builder.where(raw('LOWER("type")'), 'LIKE', `%${type.toLowerCase()}%`);
      }
    });

    res.status(200).json({
      status: true,
      message: "success",
      data: cars
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

const addCar = async (req: Request, res: Response, next: NextFunction) => {
  const { name, type, capacity, plate, rent_cost, image, is_available, available_at } = req.body

  if ( !name || !type || !capacity || !plate || !rent_cost || !image || !is_available || !available_at ) {
    res.status(400).json({
      status: false,
      message: "Bad request. Parameters are required!"
    })
  }

  try {
    const cars = await CarsModel.query()
    const id = cars.length + 1
    await CarsModel.query().insert({ id, name, type, capacity, plate, rent_cost, image, is_available, available_at })

    res.status(200).json({
      status: true,
      message: "success",
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      message: "server error"
    })
  }
}

const editCar = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body
  try {
    const updated = await CarsModel.query().where({ id }).update(data)

    if (updated == 0) {
      return res.status(404).json({
        status: false,
        message: `can't find car with id ${id}!`,
        data: null
      });
    }

    res.status(200).json({
      status: true,
      message: "success"
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const result = await CarsModel.query().where({id}).delete()

    if (result == 0) {
      return res.status(404).json({
        status: false,
        message: `can't find car with id ${id}!`,
        data: null
      });
    }

    res.status(200).json({
      status: true,
      message: "success"
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

export {
  getAll,
  addCar,
  editCar,
  deleteCar
}