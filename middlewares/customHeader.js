const customHeader = (req,res,next)=>{
    try{
        const apiKey= req.headers.apiKey;
        if(apiKey==="Josecabrera"){
            next();
        }else{
            res.status(403);
            res.send({error: "API KEY NO ES CORRECTA"});    
        }
    }catch(e){
        res.status(403);
        res.send({error: "ALGO OCURRIO EN EL CUSTOM HEADER"});
    }
}

module.exports=customHeader;