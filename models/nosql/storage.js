const mongoose = require("mongoose");

const StoresScheme = new mongoose.Schema(
    {
        url: {
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true,   //TODO createAt, updateAt
        versionKey:false
    }
)

module.exports = mongoose.model("storages",StoresScheme);