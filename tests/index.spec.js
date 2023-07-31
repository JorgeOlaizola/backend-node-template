/* eslint-disable no-undef */
const app = require('../src/app')
const request = require('supertest')

describe('GET /', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })
  test('should display a welcome message', async () => {
    const response = await request(app).get('/').send()
    expect(response.text).toBe('Welcome to REST API Template.')
  })
})
