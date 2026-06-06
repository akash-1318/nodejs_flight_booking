const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in service lay er", error);
        if(error.name == "SequelizeValidationError"){
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            console.log("explaination", explaination);
            throw new AppError("Something went wrong with the database", StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError("Something went wrong with the database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane
}