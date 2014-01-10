class Api::GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render "api/gists/index"
  end
end
