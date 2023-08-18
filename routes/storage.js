
const express = require('express');
const router = express.Router();
const uploadMiddleware =require('../utils/handleStorage');
const {createItem, getItem, getItems, deleteItem} = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');

//obtain items list
router.get('/',getItems);

//obtain item
router.get('/:id', validatorGetItem, getItem);

//delete item list
router.delete('/:id', validatorGetItem, deleteItem);

//create item list
router.post('/',uploadMiddleware.single("myFile") ,createItem);

module.exports= router;