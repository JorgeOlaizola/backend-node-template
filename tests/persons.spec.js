/* eslint-disable no-undef */
const app = require('../src/app')
const request = require('supertest')

describe('GET /persons', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/api/persons/').send()
    expect(response.statusCode).toBe(200)
  })
  test('should return three results', async () => {
    const response = await request(app).get('/api/persons/').send()
    expect(response.body.length).toEqual(3)
  })
})

describe('GET /persons/{personId}', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/api/persons/1').send()
    expect(response.statusCode).toBe(200)
    expect(response.header['content-type']).toEqual(expect.stringContaining('json'))
  })
  test('should respond with the found person', async () => {
    const response = await request(app).get('/api/persons/1').send()
    const person = response.body
    expect(typeof person).toEqual('object')
    expect(person.id).toEqual(1)
    expect(person.name).toBe('Jorge')
  })
  test('should respond 404 if person is not found', async () => {
    const response = await request(app).get('/api/persons/10').send()
    expect(response.statusCode).toEqual(404)
    expect(response.body.message).toBe('Person not found')
  })
})

describe('POST /persons/', () => {
  test('should respond with the created person', async () => {
    const response = await request(app)
      .post('/api/persons/')
      .send({ firstName: 'Andrés', lastName: 'Iniesta' })
    const person = response.body
    expect(person.id).toEqual(4)
    expect(person.firstName).toBe('Andrés')
  })

  test('should throw and err if there are missing params', async () => {
    const response = await request(app).post('/api/persons/').send({ firstName: 'Andrés' })
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toBe('"lastName" is required')
  })

  test('should throw and err if sent wrong data types', async () => {
    const response = await request(app)
      .post('/api/persons/')
      .send({ firstName: 'Andrés', lastName: 10 })
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toBe('"lastName" must be a string')
  })
})
