GistApp.Views.GistShow = Backbone.View.extend({
  tagName: "li",

  attributes: function() {
    return { "data-id": this.model.id };
  },

  events: {
    "click .favorite-button": "favorite",
    "click .unfavorite-button": "unfavorite"
  },

  template: JST["gists/show"],

  render: function () {
    var view = this;
    var renderedContent = view.template( { gist: view.model });
    view.$el.html(renderedContent);
    return view;
  },

  favorite: function (event) {
    var favorite = new GistApp.Models.Favorite();
    var gist_id = parseInt($(event.currentTarget).parent().attr('data-id'));
    favorite.url = "/api/gists/" + gist_id + "/favorites";
    favorite.save({
      success: function (response) {
        console.log(response);
      }
    });
  },

  unfavorite: function (event) {

  }
});