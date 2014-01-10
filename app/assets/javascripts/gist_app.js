window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    GistApp.gists = new GistApp.Collections.Gists();
    GistApp.gists.fetch({
      success: function() {
        console.log(GistApp.gists);
      }
    });
    new GistApp.Routers.GistRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  GistApp.initialize();
});
