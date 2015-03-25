/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.AppView = Backbone.View.extend({
        el: '#container',

        initialize: function () {
            // this.render();

            BackboneApp.vent.on('page:index', this.renderIndexPage, this);
            BackboneApp.vent.on('page:show', this.renderShowPage, this);
            this.peopleCollection = new BackboneApp.Collections.People([{name: 'Nick', age: 42}, {name: 'Adam', age: 42}]);
        },

        renderIndexPage: function(){

            var peopleView = new BackboneApp.Views.PeopleView({collection: this.peopleCollection});

            this.$el.html(peopleView.el);
        },

        renderShowPage: function(id){
            var detailedView = new BackboneApp.Views.PersonDetailedView({model: this.peopleCollection.get(id)});
            this.$el.html(detailedView.el);
        }

    });

})();
