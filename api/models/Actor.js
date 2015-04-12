/**
 * Actor.js
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

        films: {
            collection: 'film',
            through: 'film_actor'
        }
    }
};