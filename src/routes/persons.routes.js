const express = require('express')
const validatorHandler = require('../middlewares/validator.handler')
const PersonControllers = require('../controllers/person.controllers')
const PersonSchema = require('../schemas/person.schema')
const aH = require('../utils/asyncHandler')

/**
 * @openapi
 *
 *  components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Number of identification
 *         firstName:
 *           type: string
 *           description: First name of the person
 *         lastName:
 *           type: string
 *           description: Last name of the person
 *     CreatePerson:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the person
 *         lastName:
 *           type: string
 *           description: Last name of the person
 *     FindPerson:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Number of identification
 */

const router = express.Router()

/**
 * @openapi
 * /api/persons:
 *  get:
 *      tags:
 *      - Persons
 *      summary: Get list of persons
 *      responses:
 *        200:
 *          description: Array of persons
 *          content:
 *           application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Person'
 *
 *
 */
router.get('/', aH(PersonControllers.list))

/**
 * @openapi
 * /api/persons/{personId}:
 *  get:
 *      tags:
 *      - Persons
 *      summary: Get a person by id
 *      parameters:
 *       - name: id
 *         in: path
 *         description: ID of the person to get
 *         schema:
 *          type: integer
 *         required: true
 *      responses:
 *        200:
 *          description: Person data
 *          content:
 *           application/json:
 *            schema:
 *             $ref: '#/components/schemas/Person'
 *        400:
 *          description: Person not found

 */
router.get('/:id', validatorHandler(PersonSchema.find, 'params'), aH(PersonControllers.find))

/**
 * @openapi
 * /api/persons:
 *  post:
 *      tags:
 *      - Persons
 *      summary: Create a new person
 *      responses:
 *        200:
 *          description: The created person
 *          content:
 *           application/json:
 *            schema:
 *             $ref: '#/components/schemas/Person'
 *        400:
 *          description: Bad data
 *      requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreatePerson'
 *
 */
router.post('/', validatorHandler(PersonSchema.create, 'body'), aH(PersonControllers.create))

module.exports = router
