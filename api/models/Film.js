/**
 * Film
 *
 * @module      :: Model
 * @description :: This is the Film model
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var uuid = require("node-uuid"),
    _ = require("lodash");

module.exports = {

    schema: true,

    attributes: {

        title: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string'
        },

        releaseYear: {
            type: 'integer'
        },

        languageId: {
            model: "language"
        },

        originalLanguageId: {
            model: "language"
        },

        rentalDuration: {
            type: 'integer'
        },

        rentalRate: {
            type: "float",
            defaultsTo: 4.99
        },

        length: {
            type: 'integer'
        },


        replacementCost: {
            type: 'float'
        },

        rating: {
            type: 'string'
        },

        specialFeatures: {
            type: 'array'
        },

        actors: {
            collection: 'actor',
            through: 'film_actor'
        }
    },


    /**
     * Custom toJSON() implementation. Removes unwanted attributes.
     */

    toJSON: function() {
        var film = this.toObject();
        return film;
    },

    /**
     * Functions that run before a film is created
     */
    beforeCreate: [
        function(values, cb) {
            cb();
        }
    ],

    /**
     * Functions that run before a film is updated
     */
    beforeUpdate: [
        function(values, cb) {
            cb();
        }
    ]
};