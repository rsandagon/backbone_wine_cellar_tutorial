define(['view/ProjectsView'], function(ProjectsView){
    var App = new Backbone.Marionette.Application();
    App.addRegions({
        mainRegion: "#content"
    });

    App.addInitializer(function(options){
        var projectsView = new ProjectsView({
            collection: options.projects
        });

        App.mainRegion.show(projectsView);
    });
    return App;
});
