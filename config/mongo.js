const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;


/* .connect() does not accepts callback anymore 
const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err,res) =>{
        if(!err){
            console.log("Connection Successful!");
        }else{
            console.log("Connection Failed!");
        }
    } );
};*/

async function dbConnect() {
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Mongo DataBase Connexion Successful');
    } catch (error) {
      console.error('Mongo DataBase Connexion Failed!:\n', error);
    }
  }

module.exports = dbConnect;