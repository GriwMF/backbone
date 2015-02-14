/*global BackboneApp, Backbone*/

BackboneApp.Collections = BackboneApp.Collections || {};

(function () {
    'use strict';

    BackboneApp.Collections.People = Backbone.Collection.extend({

        model: BackboneApp.Models.Person

    });

})();
