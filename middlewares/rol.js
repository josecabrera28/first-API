const { handleHttpError } = require("../utils/handleError");



const checkRol = (roles) => (req,res,next) =>{
    try {
        const {user}=req;
        console.log({user});
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpError(res,"USER_DONT_HAVE_PERMISSION",403);
            return;
        }

        next();        
    } catch (error) {
        handleHttpError(res,"ERROR_PERMISSION",403);        
    }


}

module.exports = checkRol;