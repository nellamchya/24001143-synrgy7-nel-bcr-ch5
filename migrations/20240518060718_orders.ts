import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('user_email').notNullable()
    table.integer('car_id').notNullable()
    table.string('start_rent').notNullable()
    table.string('finish_rent').notNullable()
    table.string('rent_status', 255).notNullable().defaultTo('pending')
    table.boolean('payment_status').notNullable().defaultTo(false)
  })
}

export async function down(knex: Knex): Promise<void> {
}