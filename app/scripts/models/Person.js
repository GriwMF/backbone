/*global BackboneApp, Backbone*/

BackboneApp.Models = BackboneApp.Models || {};

(function () {
    'use strict';

    BackboneApp.Models.Person = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
