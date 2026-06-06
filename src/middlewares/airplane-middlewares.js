const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-errors');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.error =  new AppError(["Model number is missing in the request"], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = "Model number is required";
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.capacity){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Capacity is required", 
            data:{},
            error: "Capacity is missing in the request"
        });
    }

    next();
}

module.exports = {
    validateCreateRequest
}   