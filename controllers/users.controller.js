const Joi = require('joi');
const moment = require('moment');
const userService = require('../services/users.service');

module.exports = {
    register: async (req, res) => {
        const schema = Joi.object({
            firstName: Joi.string().min(3).required(),
            lastName: Joi.string().min(1).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            verify_password: Joi.ref('password'),
            birth_year: Joi.number().integer().min(1900).max(2013),
            phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            dateOfBirth: Joi.date().max(moment().format('YYYY-MM-DD')).required()
        });

        const result = schema.validate(req.body);

        if(result.error) {
            res.status(400).send(result.error.details);
        };
        const userId = await userService.register(req.body);

        return res.send({userId});
    },

    login: async (req,res) => {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        });

        const result = schema.validate(req. body);

        if (result.error) {
            res.status(400).send(result.error);
        };
        
        const user = await userService.login(req.body);
        
        if (!user) {
            res.status(400).send('No user');
        } else {
            res.send(user);
        }
        
    },

    information: async(req,res) => {

        const result = await userService.information(req.body)
        if (!result) {
            res.status(400).send('No User')
        } else {
            res.send(result);
        };
    },

    informationById: async(req, res) => {

        const result = await userService.informationById(req.params.id);
        if (!result) {
            res.status(400).send('No user');
        } else {
            res.send(result);
        };
    }
};