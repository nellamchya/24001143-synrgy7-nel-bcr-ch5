import { Request, Response } from "express";
import { OrdersModel } from "../model/order.model";

const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await OrdersModel.query().withGraphFetched('[users, cars]')

    res.status(200).json({
      status: true,
      message: "success",
      data: orders
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

export {
  getAll
}