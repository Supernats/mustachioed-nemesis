GistApp.Views.GistsIndex = Backbone.View.extend({
  events: {},
  render: function () {
    var view = this;
    var renderedContent = view.template( { gists: view.collection });
    view.$el.html(renderedContent);
    return view;
  },
  template: JST["gists/index"]
});