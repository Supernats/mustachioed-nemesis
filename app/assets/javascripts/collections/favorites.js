GistApp.Collections.Favorites = Backbone.Collection.extend({
  model: GistApp.Models.Favorite,
  url: function () {
    return "/api/gists/" + this.get("gist_id") + "/favorites";
  }
});