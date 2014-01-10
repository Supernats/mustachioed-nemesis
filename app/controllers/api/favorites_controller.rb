class Api::FavoritesController < ApplicationController
  before_filter :require_current_user!

  def index
    @favorites = current_user.favorites
    render "api/favorites/index"
  end

  def create
    @favorite = Favorite.new
    @favorite.favoriter = current_user
    @favorite.gist_id = params[:gist_id]
    if @favorite.save
      render :json  => @favorite
    else
      render :json => @favorite.errors, :status => 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render :json => @favorite
  end
end
