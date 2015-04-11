/**
 * Film_actor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    autoPk: false,
    attributes: {
        actorId: {
            model: "actor"
        },
        filmId: {
            model: "film"
        }
    }
};