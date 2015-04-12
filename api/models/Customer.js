/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        firstName: {
            type: 'string'
        },

        lastName: {
            type: 'string'
        },

        email: {
            type: 'email'
        },

        active: {
            type: 'boolean'
        },

        address: {
            model: 'address'
        },

        payments: {
            collection: "payment",
            via: "customer"
        },

        rentals: {
            collection: "rental",
            via: "customer"
        },

        store: {
            model: "store"
        }
    }
};