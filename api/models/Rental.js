/**
 * Rental.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        rentalDate: {
            type: "datetime"
        },
        inventoryId: {
            model: "inventory"
        },
        customerId: {
            model: "customer"
        },
        returnDate: {
            type: "datetime"
        },
        staffId: {
            model: "staff"
        }
    }
};