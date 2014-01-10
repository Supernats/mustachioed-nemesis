GistApp.Views.GistsIndex = Backbone.View.extend({
  events: {},
  render: function () {
    var view = this;
    var renderedContent = view.template({ gists: view.collection });
    view.$el.html(renderedContent);
    view.collection.each(function (gist) {
      var gistView = new GistApp.Views.GistShow({ model: gist });
      var renderedGist = gistView.render().$el;
      view.$el.find("ul").append(renderedGist);
    });
    return view;
  },
  template: JST["gists/index"]
});