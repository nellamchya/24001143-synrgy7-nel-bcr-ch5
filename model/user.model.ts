import { Model, ModelObject } from "objection";
import { OrdersModel } from "./order.model";

export class UsersModel extends Model {
  id!: number;
  user_type!: string;
  email!: string;
  password!: string;

  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: OrdersModel,
        join: {
          from: 'users.email',
          to: 'orders.user_email'
        }
      }
    }
  }
}

export type users = ModelObject<UsersModel>