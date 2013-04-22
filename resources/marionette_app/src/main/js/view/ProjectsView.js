define(['marionette', 'view/ProjectView'], function(Marionette, ProjectView){
    var ProjectsView = Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        id: 'projects',
        className: 'table-striped table-bordered',
        template: '#projects-template',
        itemView: ProjectView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("tbody").append(itemView.el);
        }
    });
    return ProjectsView;
});
