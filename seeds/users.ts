import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, user_type: "admin", email: "admin@email.com", password: "admin1234" },
        { id: 2, user_type: "customer", email: "customer1@email.com", password: "customer1" },
        { id: 3, user_type: "customer", email: "customer2@email.com", password: "customer2" },
        { id: 4, user_type: "customer", email: "customer3@email.com", password: "customer3" },
    ]);
};
