const {logger} = require('../config');

class  CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            logger.error('Error in crud repository create method', {error});
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: data
            });
            return response;
        } catch (error) {
            logger.error('Error in crud repository destroy method', {error});
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findAll({
                where: data
            });
            return response;
        } catch (error) {
            logger.error('Error in crud repository get method', {error});
            throw error;
        }
    }

     async update(data, id){
        try {
            const response = await this.model.update(data, {
                where: id
            });
            return response;
        } catch (error) {
            logger.error('Error in crud repository update method', {error});
            throw error;
        }
     }
}

module.exports = CrudRepository;