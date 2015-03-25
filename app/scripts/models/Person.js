/*global BackboneApp, Backbone*/

BackboneApp.Models = BackboneApp.Models || {};

(function () {
    'use strict';

    BackboneApp.Models.Person = Backbone.Model.extend({

        initialize: function() {
            this.set('id', BackboneApp.id);
            BackboneApp.id++;
        },

        defaults: {
            name: 'Adam',
            surname: 'Smith'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
