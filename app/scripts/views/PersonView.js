/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.PersonView = Backbone.View.extend({

        template: JST['app/scripts/templates/PersonView.ejs'],

        tagName: 'tr',

        id: '',

        className: '',

        events: {
            'click .deleteBtn': 'deletePerson',
            'click .editBtn': 'editPerson',
            'click' : 'showPerson'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.destroy)
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        destroy: function(){
            this.$el.remove();
        },

        deletePerson: function(){
            this.model.destroy();
            return false;
        },

        editPerson: function(){
            BackboneApp.vent.trigger("editPerson", this.model);
            return false;
        },

        showPerson: function(){
            BackboneApp.router.navigate('person/' + this.model.get('id'), {trigger:true});
            return false;
        }

    });

})();
