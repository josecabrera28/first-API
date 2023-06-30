const {tracksModel}=require('../models');
//obtener lista de items
const getItems = async (req,res)=>{
    const data = await tracksModel.find({});
    res.send({data});
};

//obtener 1 item
const getItem = (req,res)=>{};

//crear 1 item
const createItem = async (req,res)=>{
    const {body} = req;
    console.log(body);
    const data = await tracksModel.create(body);
    res.send({data});
};

//actualizar 1 item
const updateItem = (req,res)=>{};

//borrar 1 item
const deleteItem = (req,res)=>{};

module.exports ={getItems,getItem, createItem, updateItem,deleteItem};