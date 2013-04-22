define(['marionette'], function(Marionette){
    var ProjectView = Backbone.Marionette.ItemView.extend({
        template: '#project-template',
        tagName: 'tr',
        className: 'project'
    });
    return ProjectView;
});
