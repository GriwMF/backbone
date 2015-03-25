/*global BackboneApp, Backbone, JST*/

BackboneApp.Views = BackboneApp.Views || {};

(function () {
    'use strict';

    BackboneApp.Views.NewPersonView = Backbone.View.extend({

        template: JST['app/scripts/templates/newPersonView.ejs'],

        tagName: 'tr',

        id: '',

        className: '',

        events: {
            'click #saveBtn': "saveModel",
            'click #cancelBtn': "clearForm"
        },

        initialize: function () {
            this.person = new BackboneApp.Models.Person();
            BackboneApp.vent.on("editPerson", this.editModel, this);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            this.$inputs = this.$el.find('input');
            return this;
        },
        saveModel: function(){
            this.getInputsValues();
            if (this.collection.add(this.person)){
                this.clearForm();
            }
            return false;
        },
        clearForm: function(){
            this.$inputs.val('');
            this.person = new BackboneApp.Models.Person();
            return false;
        },
        getInputsValues: function(){
            var person = this.person;
            $.each(this.$inputs, function(){
                person.set(this.getAttribute('name'), this.value);
            });
        },
        editModel: function(model){
            this.person = model;
            $.each(this.$inputs, function(){
                this.value = model.get(this.getAttribute('name'));
            });
        }
    });
})();
