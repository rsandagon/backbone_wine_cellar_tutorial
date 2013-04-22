require.config( {
    paths:{
        underscore:'lib/underscore',
        backbone:'lib/backbone',
        marionette:'lib/backbone.marionette',
        handlebars:'lib/handlebars-1.0.rc.1',
        TrafficCop:'lib/TrafficCop.min',
        app:'application',
        projects:'model/Projects',
        project:'model/Project'
    }
} );

require([ 'jquery', 'TrafficCop', 'underscore', 'backbone', 'marionette', 'handlebars', 'app','projects', 'project'],
    function ( $, TrafficCop, _, Backbone, Marionette, Handlebars, App, Projects, Project) {
        Backbone.Marionette.TemplateCache.loadTemplate = function(templateId, callback){
            var tmpId = templateId.replace("#", "");
            var url = "templates/" + tmpId + ".html";
            var promise = $.trafficCop(url);
            promise.done(function(template){
                callback.call(this, Handlebars.compile($(template).html()));
            });
        }

        var projects = new Projects([
            new Project({ name: 'First Project' }),
            new Project({ name: 'Second Project' }),
                new Project({ name: 'Third Project' })
        ]);
        App.start({projects: projects});
    }
);

