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
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            this.$inputs = this.$el.find('input');
            return this;
        },
        saveModel: function(){
            var person = this.getInputsValues();

            if (this.collection.add(person)){
                this.clearForm();
            }
            return false;
        },
        clearForm: function(){
            this.$inputs.val('');
            return false;
        },
        getInputsValues: function(){
            var values = {};
            $.each(this.$inputs, function(){
                values[this.getAttribute('name')] = this.value;
            })
            return values;
        }

    });

})();
