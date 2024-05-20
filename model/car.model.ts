import { Model, ModelObject } from "objection";
import { OrdersModel } from "./order.model";

export class CarsModel extends Model {
  id!: number;
  name!: string;
  type!: string;
  capacity!: number;
  plate!: string;
  rent_cost!: number;
  image!: string;
  is_available!: boolean;
  available_at!: string

  static get tableName() {
    return "cars";
  }

  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: OrdersModel,
        join: {
          from: 'cars.id',
          to: 'orders.car_id'
        }
      }
    }
  }
}

export type cars = ModelObject<CarsModel>