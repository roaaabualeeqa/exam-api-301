'use strict';

require('dotenv').config();
const express = require('express');
const server = express();

const axios = require('axios');

const cors = require('cors');
server.use(cors());

const data = require('./data.json');

const PORT = process.env.PORT;

// http://localhost:3010/getFlowers
server.get('/getFlowers',getFlowersHandler);
server.get('*',notFoundHandler);

function getFlowersHandler(req,res)
{
    res.send(data);
}

function notFoundHandler(req,res)
{
    res.send("Error : The route not found!");
}

server.listen(PORT,()=>{
    console.log(`I am Listening on port: ${PORT}`);
})