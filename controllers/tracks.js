const { matchedData } = require('express-validator');
const {tracksModel}=require('../models');
const { handleHttpError } = require('../utils/handleError');
//obtener lista de items
const getItems = async (req,res)=>{
    try {
        const data = await tracksModel.find({});
        res.send({data});    
    } catch (e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

//obtener 1 item
const getItem = async(req,res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

//crear 1 item
const createItem = async (req,res)=>{
    try {
        const body =matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res,"ERROR_CREATE_ITEM");
    }
};

//actualizar 1 item
const updateItem = async(req,res)=>{
    try {
        const {id, ...body} =matchedData(req);
        console.log({id,body});
        const data = await tracksModel.findByIdAndUpdate(
            id, body
        );
        res.send({data});
    } catch (e) {
        handleHttpError(res,e.message);
    }
};

//borrar 1 item
const deleteItem = async(req,res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findByIdAndDelete({_id:id});
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
};

module.exports ={getItems,getItem, createItem, updateItem,deleteItem};