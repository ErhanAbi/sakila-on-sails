/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    scheam: true,
    attributes: {
        firstName: {
            type: "string"
        },
        lastName: {
            type: "string"
        },
        
        address: {
            model: "address"
        },

        email: {
            type: "email"
        },

        active: {
            type: "boolean"
        },

        username: {
            type: "string"
        },

        password: {
            type: "string"
        },

        store: {
            model: "store"
        },

        managedStores: {
            collection: "store",
            via: "managerStaff"
        },

        payments: {
            collection: "payment",
            via: "staff"
        },

        rentals: {
            collection: "rental",
            via: "staff"
        },

        toJSON: function() {
            var staff = this.toObject();
            staff.picture = undefined;
            return staff;
        }
    }

};