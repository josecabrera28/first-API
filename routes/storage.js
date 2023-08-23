
const express = require('express');
const router = express.Router();
const uploadMiddleware =require('../utils/handleStorage');
const {createItem, getItem, getItems, deleteItem} = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');

/**
 * Get all storages
 * @openapi
 * /storage:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Storage List"
 *      description: Retrieve storage List
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retrieves all storage files.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Validation Error.
 */
router.get('/',getItems);

/**
 * Get detail from storage
 * @openapi
 * /storage/{id}:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Retrieves 1 Storage file"
 *      description: Retrieves 1 Storage file
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: File´s ID to retrieve
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retrieves 1 Storage file.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Validation Error.
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Delete storage
 * @openapi
 * /storage/{id}:
 *    delete:
 *      tags:
 *        - storage
 *      summary: "Delete storage file"
 *      description: Deletes 1 storage file
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: File´s ID to delete
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retreives deleted file.
 *        '422':
 *          description: Validation Error.
 */
router.delete('/:id', validatorGetItem, deleteItem);

/**
 * Upload file
 * @openapi
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Upload file"
 *      description: Creates 1 file in storage
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retrieves file stored.
 *        '422':
 *          description: Validation Error.
 *      requestBody:
 *        content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myfile:
 *                 type: string
 *                 format: binary
 *    responses:
 *      '201':
 *        description: Retrieves file stored with status '201'
 *      '403':
 *        description: User has no permissions'403'
 */
router.post('/',uploadMiddleware.single("myFile") ,createItem);

module.exports= router;