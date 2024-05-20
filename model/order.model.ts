import { Model, ModelObject } from "objection";
import { UsersModel } from "./user.model"
import { CarsModel } from "./car.model";

export class OrdersModel extends Model {
  id!: number;
  user_email!: string;
  car_id!: number;
  start_rent!: string;
  finish_rent!: string;
  rent_status!: string;
  payment_status!: boolean;

  static get tableName() {
    return "orders";
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: 'orders.user_email',
          to: 'users.email'
        }
      },
      cars: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarsModel,
        join: {
          from: 'orders.car_id',
          to: 'cars.id'
        }
      }
    }
  }
}

export type orders = ModelObject<OrdersModel>