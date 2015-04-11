/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    schema: true,

    attributes: {
        address: {
            type: "string"
        },
        address2: {
            type: "string"
        },
        district: {
            type: "string"
        },
        cityId: {
            model: "city"
        },
        postalCode: {
            type: "string"
        },
        phone: {
            type: "string"
        }
    }
};