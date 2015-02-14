/*global BackboneApp, Backbone*/

BackboneApp.Routers = BackboneApp.Routers || {};

(function () {
    'use strict';

    BackboneApp.Routers.Main = Backbone.Router.extend({
      routes: {
        '': 'index'
      },
      index: function(){
        BackboneApp.vent.trigger('page:index');
      }
    });

})();
