import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('name', 255).notNullable()
    table.string('type', 255).notNullable()
    table.integer('capacity').notNullable()
    table.string('plate', 16).notNullable()
    table.integer('rent_cost').notNullable()
    table.string('image').notNullable()
    table.boolean('is_available').notNullable().defaultTo(true)
    table.string('available_at').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
}