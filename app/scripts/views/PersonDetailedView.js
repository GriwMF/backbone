/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.PersonDetailedView = Backbone.View.extend({

        template: JST['app/scripts/templates/PersonDetailedView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
