require("dotenv").config();
const express = require ("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const openApiConfiguration = require ('./docs/swagger');
const swaggerUI = require ('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//use documentation route
app.use('/documentation',swaggerUI.serve, swaggerUI.setup(openApiConfiguration));

//here we call routes
app.use("/api",require("./routes"));

app.listen(port, () =>{
    console.log("Server started and listening in Port: "+port);
});

dbConnect();