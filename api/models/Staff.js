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
        addressId: {
            model: "address"
        },
        picture: {
            type: "binary"
        },

        email: {
            type: "email"
        },

        stores: {
            collection: "store",
            via: "managerStaffId"
        },

        payments: {
            collection: "payment",
            via: "staffId"
        },

        rentals: {
            collection: "rental",
            via: "staffId"
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


        toJSON: function() {
            var staff = this.toObject();
            staff.picture = undefined;
            return staff;
        }
    }

};