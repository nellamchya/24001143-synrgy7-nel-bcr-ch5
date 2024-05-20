import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { id: 1, name: "F150", type: "Sedan", capacity: 2, plate: "JPM-5480", rent_cost: 200000, image: "./images/car01.min.jpg", is_available: true, available_at: "2022-03-23T15:49:05.563Z" },
        { id: 2, name: "X5", type: "Convertible", capacity: 4, plate: "JPM-5481", rent_cost: 200000, image: "./images/car01.min.jpg", is_available: true, available_at: "2022-03-23T15:49:05.563Z" },
        { id: 3, name: "MKZ", type: "Sedan", capacity: 4, plate: "JPM-5482", rent_cost: 200000, image: "./images/car01.min.jpg", is_available: true, available_at: "2022-03-23T15:49:05.563Z" },
        { id: 4, name: "M5", type: "Hatchback", capacity: 6, plate: "JPM-5483", rent_cost: 200000, image: "./images/car01.min.jpg", is_available: true, available_at: "2022-03-23T15:49:05.563Z" },
        { id: 5, name: "Navigator", type: "Minivan", capacity: 6, plate: "JPM-5484", rent_cost: 200000, image: "./images/car01.min.jpg", is_available: true, available_at: "2022-03-23T15:49:05.563Z" }
    ]);
};
