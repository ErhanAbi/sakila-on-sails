/**
 * Store.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        managerStaff: {
            model: "Staff"
        },
        address: {
            model: "Address"
        },

        films: {
            collection: "Film",
            through: "inventory"
        },

        customers: {
            collection: "Customer",
            via: "store"
        },

        personel: {
            collection: "Staff",
            via: "store"
        }
    }
};