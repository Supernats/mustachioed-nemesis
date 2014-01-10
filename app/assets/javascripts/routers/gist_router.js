GistApp.Routers.GistRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var router = this;
    console.log(GistApp.gists);
    var indexView = new GistApp.Views.GistsIndex({ collection: GistApp.gists });
    this.$rootEl.html(router._swapView(indexView).render().$el);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    return newView;
  }
})