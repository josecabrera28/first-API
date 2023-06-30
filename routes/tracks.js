const express = require ("express");
const { getItems, createItem } = require("../controllers/tracks");
const router = express.Router();
const {validatorCreateItem}=require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');

//CRUD for tracks
//get all items
router.get('/',getItems);

//create 1 item
router.post('/',validatorCreateItem,customHeader,createItem);

module.exports = router;