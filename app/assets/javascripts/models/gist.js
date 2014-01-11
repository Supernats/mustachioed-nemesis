GistApp.Models.Gist = Backbone.Model.extend({
  parse: function (data) {
    var favorites = data.favorites;
    data.favorites = new GistApp.Collections.Favorites(favorites);
    data.favorites.gistId = data.id;
    return data;
  },

  toJSON: function () {
    var data = _.clone(this.attributes);
    data.favorites = this.get('favorites').toJSON();
    return data;
  }
});