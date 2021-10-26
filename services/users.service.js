const UserModel = require('../models/users.model');

module.exports = {
    register: async (requestBody) => {
        const user = new UserModel(requestBody);
        await user.save();
        return user._id;
    },

    login: async (reqBody) => {
        const user = await UserModel.find({ email: reqBody.email  , password: reqBody.password });
        return user;
    }, 

    information: async () => {
        const user = await UserModel.find();
        return user;
    },

    informationById: async (id) => {
        const result = await UserModel.findById(id);
        return result; 
    }
}