const {storageModel}=require('../models');

const URL = process.env.PUBLIC_URL;


//obtener lista de items
const getItems = async (req,res)=>{
    const data = await storageModel.find({});
    res.send({data});
};

//obtener 1 item
const getItem = (req,res)=>{};

//crear 1 item
const createItem = async (req,res)=>{
    const {body, file} = req;
    console.log(file);
    const fileData ={
        filename: file.filename,
        url: `${URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data});
};

//actualizar 1 item
const updateItem = (req,res)=>{};

//borrar 1 item
const deleteItem = (req,res)=>{};

module.exports ={getItems,getItem, createItem, updateItem,deleteItem};