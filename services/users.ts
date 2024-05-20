import { Request, Response } from 'express'
import { UsersModel } from "../model/user.model";
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await UsersModel.query().findOne({ email })

    if (user) {
      if (user.password === password) {
        const payload = {
          id: user.id,
          user_type: user.user_type
        }

        const token = await jwt.sign(payload, JWT_SECRET_KEY, {
          expiresIn: "30d",
        });

        return res.status(200).json({
          status: true,
          message: "login success.",
          data: {
            token: token
          }
        })
      } else {
        return res.status(400).json({
          status: false,
          message: "login failed!"
        })
      }
    }

    return res.status(400).json({
      status: false,
      message: "Email is not registered!, please register first!",
    })
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export {
  login
}