/*global BackboneApp, $*/


window.BackboneApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    BackboneApp.init();

    window.person1 = new BackboneApp.Models.Person({name: 'Nick', age: 42});

    var pView = new BackboneApp.Views.PersonView({model: person1});

    $('#peopleList').append(pView.render().el);

    // console.log(pView.render().el);

});
