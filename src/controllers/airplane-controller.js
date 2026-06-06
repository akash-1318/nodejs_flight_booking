const {AirplaneService} = require('../services');
const {StatusCodes} = require("http-status-codes")
const {ErrorResponse, SuccessResponse} = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        console.log("hello",error.statusCode);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
 
module.exports = {
    createAirplane
}