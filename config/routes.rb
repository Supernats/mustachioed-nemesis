GistApp::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  namespace :api, :defaults => { :format => :json } do
    resources :gists, :except => [:new, :edit] do
      resources :favorites, :only => [:create]
    end
    resources :favorites, :only => [:index, :destroy]
  end

  root :to => "root#root"
end
