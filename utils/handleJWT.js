const jwt = require ('jsonwebtoken');
const { handleHttpError } = require('./handleError');
const JWT_SECRET = process.env.JWT_SECRET;

const signToken = async (user) =>{
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    return sign;
}

const verifyToken = async (tokentJwt) =>{
    try {
        return jwt.verify(tokentJwt,JWT_SECRET);
    } catch (error) {
        handleHttpError(res,"ERROR_VERIFY_TOKEN");
    }
}

module.exports = {signToken, verifyToken}
