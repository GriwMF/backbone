/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.PersonView = Backbone.View.extend({

        template: JST['app/scripts/templates/PersonView.ejs'],

        tagName: 'tr',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

})();
