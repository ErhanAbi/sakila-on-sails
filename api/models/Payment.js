/**
 * Payment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        customerId: {
            model: "customer"
        },
        staffId: {
            model: "staff"
        },
        rentalId: {
            model: "rental"
        },
        amount: {
            type: "float"
        },
        paymentDate: {
            type: "datetime"
        }
    }
};