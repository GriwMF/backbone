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

    window.people = new BackboneApp.Collections.People([{name: 'Nick', age: 42}, {name: 'Adam', age: 42}]);

    var cView = new BackboneApp.Views.PeopleView({collection: people});

    $('.container').append(cView.render().el);

    // console.log(pView.render().el);

});
