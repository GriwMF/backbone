/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.PeopleView = Backbone.View.extend({

        template: JST['app/scripts/templates/PeopleView.ejs'],

        tagName: 'table',

        id: '',

        className: 'table',

        events: {},

        initialize: function () {
            // this.listenTo(this.collection, 'remove', this.render);
            this.listenTo(this.collection, 'add', this.addOne);

            this.renderTemplate();
            this.$tbody = this.$el.find('tbody');
        },

        renderTemplate: function(){
            this.$el.html(this.template());
            var nView = new BackboneApp.Views.NewPersonView({collection: this.collection});
            this.$el.find('tfoot').html(nView.el);
        },

        render: function () {
            this.$tbody.empty();
            this.collection.each(this.addOne, this)
            return this;
        },

        addOne: function(person){
            var pView = new BackboneApp.Views.PersonView({model:person});
            this.$tbody.append(pView.render().el);
        }

    });

})();
