
//REST API will use Express.js framework
const express = require ('express');
const app=express();

//Enable Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());


const characters = require('./Services/GetMarvelCharacters.js')
const constants = require('./Configuration/Constants.js')
const port=constants.server_Port;

//Get related data to selected marvel's characters.
app.get('/MarvelCharacters',(req,res)=>{
    try{
        characters.GetData().then((result)=>{
        res.json(result);
    })
    }
    catch(error)
    {
        console.log(error);
    }
});

//Listen to the port 5000
app.listen(port, () => console.log(`Server started on port ${port}`));
