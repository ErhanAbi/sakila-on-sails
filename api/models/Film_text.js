/**
 * Film_text.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    autoPK: false,
    attributes: {
        film: {
            model: "inventory"
        },
        title: {
            type: "string"
        }
    }
};