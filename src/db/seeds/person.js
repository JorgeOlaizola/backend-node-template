/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('person').del()
  await knex('person').insert([
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jorge', lastName: 'Olaizola' },
    { firstName: 'Lionel', lastName: 'Messi' }
  ])
}
