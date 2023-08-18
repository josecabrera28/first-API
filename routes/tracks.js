const express = require ("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const router = express.Router();
const {validatorCreateItem, validatorGetItem}=require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');
const authMiddleWare = require('../middlewares/sesion');

//CRUD for tracks
//get all items
router.get('/', authMiddleWare, getItems);

//get 1 item
router.get('/:id',validatorGetItem, getItem);

//create 1 item
router.post('/',validatorCreateItem,customHeader,createItem);

//update 1 item
router.put('/:id',validatorGetItem, validatorCreateItem, updateItem);

//delete 1 item
router.delete('/:id',validatorGetItem, deleteItem);

module.exports = router;