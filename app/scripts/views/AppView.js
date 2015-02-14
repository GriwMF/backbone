/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.AppView = Backbone.View.extend({
        el: '#container',

        initialize: function () {
            // this.render();

            BackboneApp.vent.on('page:index', this.renderIndexPage, this);

            this.peopleCollection = new BackboneApp.Collections.People([{name: 'Nick', age: 42}, {name: 'Adam', age: 42}]);
        },

        renderIndexPage: function(){

            this.peopleView = this.peopleView ? this.peopleView : (new BackboneApp.Views.PeopleView({collection: this.peopleCollection}));
            this.$el.html(this.peopleView.el);
        }

    });

})();
