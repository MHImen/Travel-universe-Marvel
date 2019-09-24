const request = require("request-promise");
const constants = require('../Configuration/Constants.js')

async function GetCharacters(){
    try {
        //Get all related data to selected marvel characters
        let Marvel_data = await request({
            method: "GET",
            url: constants.Marvel_API_Endpoint_URL,
            json: true,
            qs: {
                //Limit the result set to the specified number of resources
                limit: constants.limit_Result,
                //Skip the specified number of resources in the result set
                offset: 0,
            }
        });
        return Marvel_data.data.results;

    } catch (error) {
        console.log(error);
        return error;
    }  
}
module.exports = {
    GetData: GetCharacters
}