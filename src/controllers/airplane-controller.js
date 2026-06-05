const {AirplaneService} = require('../services');

const statusCodes = {
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
};

async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane(req.body);
        return res.status(statusCodes.CREATED).json({
            success: true,
            message: "Successfully created an airplane",
            data: response
        });
    } catch (error) {
        console.log('Error in controller layer');
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Unable to create an airplane",
            error: error
        });
    }
}

module.exports = {
    createAirplane
}