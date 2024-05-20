import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("orders").del();

    // Inserts seed entries
    await knex("orders").insert([
        { id: 1, user_email: "customer1@email.com", car_id: 2, start_rent: "2022-03-19T15:49:05.563Z", finish_rent: "2022-03-20T15:49:05.563Z", rent_status: "pending", payment_status: "false" },
        { id: 2, user_email: "customer3@email.com", car_id: 1, start_rent: "2022-03-19T15:49:05.563Z", finish_rent: "2022-03-20T15:49:05.563Z", rent_status: "pending", payment_status: "false" },
        { id: 3, user_email: "customer2@email.com", car_id: 3, start_rent: "2022-03-19T15:49:05.563Z", finish_rent: "2022-03-20T15:49:05.563Z", rent_status: "pending", payment_status: "false" },
    ]);
};
