/**
 * City.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        city: {
            type: "string"
        },
        country: {
            model: "country"
        },
        addresses: {
            collection: "address",
            via: "city"
        }
    }
};