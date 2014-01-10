class Api::GistsController < ApplicationController
  before_filter :require_current_user!

  def index
    @gists = current_user.gists
    render "api/gists/index"
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.owner = current_user
    if @gist.save
      render :json => @gist
    else
      render :json => @gist.errors, :status => 422
    end
  end

  def show
    @gist = Gist.find(params[:id])
    render :json => @gist
  end

  def destroy
    @gist = Gist.find(params[:id])
    @gist.destroy
    render :json => @gist
  end
end
