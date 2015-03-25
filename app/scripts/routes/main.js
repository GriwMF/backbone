/*global BackboneApp, Backbone*/

BackboneApp.Routers = BackboneApp.Routers || {};

(function () {
    'use strict';

    BackboneApp.Routers.Main = Backbone.Router.extend({
      routes: {
        '': 'index',
        'person/:id': 'show'
      },
      index: function(){
        BackboneApp.vent.trigger('page:index');
      },
      show: function(id){
        BackboneApp.vent.trigger('page:show', id);
      }
    });

})();
