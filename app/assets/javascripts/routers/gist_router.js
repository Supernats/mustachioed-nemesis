GistApp.Routers.GistRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var router = this;
    var indexView = new GistApp.Views.GistsIndex({ collection: GistApp.gists });
    var renderedContent = router._swapView(indexView).render().$el;
    this.$rootEl.html(renderedContent);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    return newView;
  }
})