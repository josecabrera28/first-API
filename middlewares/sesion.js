const { handleHttpError } = require ('../utils/handleError');
const { verifyToken } = require('../utils/handleJWT');
const { usersModel } = require('../models');

const authMiddleWare = async (req, res, next) =>{
    try {
        if(!req.headers.authorization){
            handleHttpError(res,"NEEDS_AUTHENTICATION_TOKEN",401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken._id){
            handleHttpError(res,"ERROR_TOKEN_ID",401);
            return;
        }

        const user = await usersModel.findById(dataToken._id);
        req.user = user;

        next();

    } catch (error) {
        handleHttpError(res,"DATA_INVALID",401);
    }
} 

module.exports = authMiddleWare;
