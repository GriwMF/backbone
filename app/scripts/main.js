/*global BackboneApp, $*/


window.BackboneApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    vent:{},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        _.extend(BackboneApp.vent, Backbone.Events);
        var appView = new BackboneApp.Views.AppView;

        var router = new BackboneApp.Routers.Main;
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    BackboneApp.init();

    // window.people = new BackboneApp.Collections.People([{name: 'Nick', age: 42}, {name: 'Adam', age: 42}]);

    // var cView = new BackboneApp.Views.PeopleView({collection: people});

    // $('.container').append(cView.render().el);

    // console.log(pView.render().el);

});
