GistApp.Views.GistShow = Backbone.View.extend({
  tagName: "li",
  events: {},
  template: JST["gists/show"],
  render: function () {
    var view = this;
    var renderedContent = view.template( { gist: view.model });
    view.$el.html(renderedContent);
    return view;
  }
});