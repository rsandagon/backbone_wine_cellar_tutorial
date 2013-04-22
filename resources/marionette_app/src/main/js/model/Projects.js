define(['backbone', 'project'], function(Backbone, Project){

    var Projects = Backbone.Collection.extend({
        model: Project

    });
    return Projects;
});
