const express = require ("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const router = express.Router();
const {validatorCreateItem, validatorGetItem}=require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');
const authMiddleWare = require('../middlewares/sesion');
const checkRol = require("../middlewares/rol");

//CRUD for tracks

/**
 * Get all tracks
 * @openapi
 * /tracks:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Tracks List"
 *      description: Retrieve all tracks
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retreived all tracks.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/track'
 *        '422':
 *          description: Validation Error.
 */
router.get('/', authMiddleWare, getItems);

/**
 * Get track
 * @openapi
 * /tracks/{id}:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Get 1 Track"
 *      description: Retrieve 1 Track details
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Track´s ID to retreive
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Track details retrieved.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/track'
 *        '422':
 *          description: Validation Error.
 */
router.get('/:id', authMiddleWare ,validatorGetItem, getItem);

/**
 * Register new track
 * @openapi
 * /tracks:
 *    post:
 *      tags:
 *        - tracks
 *      summary: "Register new track"
 *      description: Register new track details
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retrieves inserted track detailed.
 *        '422':
 *          description: Validation Error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retrieves inserted track detailed with status '201'
 *      '403':
 *        description: User has no permissions '403'
 */
router.post('/', authMiddleWare, checkRol(["admin"]),validatorCreateItem,customHeader,createItem);

/**
 * Update track
 * @openapi
 * /tracks/{id}:
 *    put:
 *      tags:
 *        - tracks
 *      summary: "Update track"
 *      description: Update a track and retrieve track´s details
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Track´s ID to update
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retrieves updated Track.
 *        '422':
 *          description: Validation Error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retrieves updated Track with status '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/track'
 *      '403':
 *        description: User has no permission '403'
 */
router.put('/:id', authMiddleWare,validatorGetItem, validatorCreateItem, updateItem);

/**
 * Delete track
 * @openapi
 * /tracks/{id}:
 *    delete:
 *      tags:
 *        - tracks
 *      summary: "Delete track"
 *      description: Delete track details
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Track´s ID to delete
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retreives deleted track.
 *        '422':
 *          description: Validation Error.
 */
router.delete('/:id', authMiddleWare,validatorGetItem, deleteItem);

module.exports = router;